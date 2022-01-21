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
        let tasks = []
        payload.map(value => {
            const t = preloadtasks.filter(task => task.id == value)
            tasks.push(...t)            
        })
        if(tasks.length === 0)
            // throw new Error('Resource(s) you want to delete were not found')
            return response.status(404).json({statusCode: 404, message: "Resource(s) you want to delete were not found"})
        return await this.repository.remove(tasks)
            .then(results => response.status(201).json({
                results, 
                results: "Task has deleted !"
            }))
            .catch(error => response.status(404).json({message: `An error has occurred : ${error}`}))
    }



}  