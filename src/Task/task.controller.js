import { Bind, Body, Controller, Delete, Dependencies, Get, Param, Post, Put, Res } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
@Dependencies(TaskService)
export class TaskController{
    constructor(taskService){
        this.taskService = taskService
    }   

    @Get('all')
    @Bind(Res())
    gestAllTasks(response){
        return this.taskService.getAll()
            .then(results => response.status(201).json({results}))
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error }))
    }

    @Get('/:id')
    @Bind(Param('id'), Res())
    getTask(id, response){
        return this.taskService.get(id)
            .then(results => response.status(201).json({results})) 
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error }))
    }

    @Post('add')
    @Bind(Body(), Res())
    addTask(task, response){

        return this.taskService.create(task)
            .then(results => response.status(201).json({results, message: 'Post added !'}))
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
    }

    @Put('update/:id')
    @Bind(Body(), Param('id'), Res())
    updateTask(updatedTask, response){
        return this.taskService.update(updatedTask, id)
            .then(response.status(201).json({
                results,
                message: `Task ${id} has updated successful !`
            }))
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
    }


    @Delete('remove/:id')
    @Bind(Param('id'), Res())
    deleteTask(id, response){
        id = parseInt(id)
        return this.taskService.remove(id)
            .then(response.status(201).json({
                results, 
                results: "Task has deleted !"
            }))
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
    }


}
 