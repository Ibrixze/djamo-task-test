import { CommandHandler } from '@nestjs/cqrs'
import { getRepositoryToken } from '@nestjs/typeorm'
import { DeleteTaskCommand } from './delete-task.command'
import { TaskEntity } from '../../entities/task.entity'

@CommandHandler(DeleteTaskCommand)
// @Dependencies(getRepositoryToken(TaskEntity))
export class DeleteTaskCommandHandler{
    constructor(repository){
        this.repository = repository
    }

    async execute(command){
        const { payload, response } = command
        
        const preloadtasks = await this.reepository.find()
        const tasks = payload.map(value => preloadtasks.filter(task => task.id === parseInt(value)))
        return await this.repository.remove(tasks)
        .then(response.status(201).json({
            results, 
            results: "Task has deleted !"
        }))
        .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
    }



}  