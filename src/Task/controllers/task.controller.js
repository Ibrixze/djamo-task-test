import { Bind, Body, Controller, Delete, Dependencies, Get, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs'
// import { ApiTags, ApiOkResponse } from '@nestjs/swagger'
import { AddTaskCommand } from '../commands/add/add-task.command';
import { DeleteTaskCommand } from '../commands/delete/delete-task.command';
import { UpdateTaskCommand } from '../commands/update/update-task.command';
import { getAllTasksQuery } from '../queries/all/get-all-tasks.query';
import { getTaskQuery } from '../queries/get/get-task.query';
import { TaskService } from '../services/task.service';


@Controller('/api/task')
@Dependencies(CommandBus, QueryBus, TaskService)
export class TaskController{
    constructor(CommandBus, QueryBus, taskService){
        this.commandBus = CommandBus
        this.queryBus = QueryBus
        this.taskService = taskService
    }   

    @Get('/all')
    @Bind(Res())
    gestAllTasks(response){
        return this.queryBus.execute(new getAllTasksQuery(response))
    }

    @Get('/:id')
    @Bind(Param('id'), Res())
    getTask(id, response){
        return this.queryBus.execute(new getTaskQuery(id, response))
    }

    @Post('/add')
    @Bind(Body(), Res())
    addTask(task, response){
        return this.commandBus.execute(new AddTaskCommand(task, response))
    }

    @Patch('/update/:id')
    @Bind(Param('id'), Body(), Res())
    updateTask(id, updatedTask, response){
        return this.commandBus.execute(new UpdateTaskCommand(id, updatedTask, response))
    }


    @Delete('/remove')
    @Bind(Query(), Res())
    deleteTask(query, response){
        const tasks = query.tasks.split('-')
        if(parseInt(tasks[0]) === 'NaN')
            throw new NotFoundException('Not params type given') 
        return this.commandBus.execute(new DeleteTaskCommand(tasks, response))
    }


}
 