import { Bind, Body, Controller, Delete, Dependencies, Get, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { AddTaskCommand } from '../commands/add/add-task.command';
import { DeleteTaskCommand } from '../commands/delete/delete-task.command';
import { UpdateTaskCommand } from '../commands/update/update-task.command';
import { getAllTasksQuery } from '../queries/all/get-all-tasks.query';
import { getTaskQuery } from '../queries/get/get-task.query';
import { TaskService } from '../services/task.service';

@Controller('task')
@Dependencies(CommandBus, QueryBus, TaskService)
export class TaskController{
    constructor(CommandBus, QueryBus, taskService){
        this.commandBus = CommandBus
        this.queryBus = QueryBus
        this.taskService = taskService
    }   

    @Get('all')
    @Bind(Res())
    gestAllTasks(response){
        // return this.taskService.getAll()
        //     .then(results => response.status(201).json({results}))
        //     .catch(error => response.status(401).json({message: 'An error has occurred : ' + error }))
        return this.queryBus.execute(new getAllTasksQuery(response))
    }

    @Get('/:id')
    @Bind(Param('id'), Res())
    getTask(id, response){
        // return this.taskService.get(id)
        //     .then(results => response.status(201).json({results})) 
        //     .catch(error => response.status(401).json({message: 'An error has occurred : ' + error }))
        return this.queryBus.execute(new getTaskQuery(id, response))
    }

    @Post('add')
    @Bind(Body(), Res())
    addTask(task, response){

        // return this.taskService.create(task)
        //     .then(results => response.status(201).json({results, message: 'Post added !'}))
        //     .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
        return this.commandBus.execute(new AddTaskCommand(task, response))
    }

    @Patch('update/:id')
    @Bind(Param('id'), Body(), Res())
    updateTask(id, updatedTask, response){
        // return this.taskService.update(updatedTask, id)
        //     .then(response.status(201).json({
        //         results,
        //         message: `Task ${id} has updated successful !`
        //     }))
        //     .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
        return this.commandBus.execute(new UpdateTaskCommand(id, updatedTask, response))
    }


    @Delete('remove')
    @Bind(Param('id'), Query(), Res())
    deleteTask(id, query, response){
        id = parseInt(id)
        const tasks = query.tasks.split('#')
        console.log(tasks)
        // return this.taskService.remove(query)
        //     .then(response.status(201).json({
        //         results, 
        //         results: "Task has deleted !"
        //     }))
        //     .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
        return this.commandBus.execute(new DeleteTaskCommand(tasks, response))
    }


}
 