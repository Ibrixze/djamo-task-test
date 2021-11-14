import { CommandHandler } from '@nestjs/cqrs'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Dependencies } from '@nestjs/common'
import { DeleteTaskCommand } from './delete-task.command'
import { TaskEntity } from '../../entities/task.entity'

@CommandHandler(DeleteTaskCommand)
@Dependencies(getRepositoryToken(TaskEntity))
export class DeleteTaskCommandHandler{
    constructor(repository){
        this.repository = repository
    }

    async execute(command){
        const { payload, response } = command
        
        const preloadtasks = await this.repository.find()
        const tasks = preloadtasks.filter(task => payload.map(value => task.id === parseInt(value)))
        return await this.repository.remove(tasks)
            .then(results => response.status(201).json({
                results, 
                results: "Task has deleted !"
            }))
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
    }



}  