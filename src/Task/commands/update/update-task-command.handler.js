import { CommandHandler } from '@nestjs/cqrs'
import { UpdateTaskCommand } from './update-task.command'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Dependencies } from '@nestjs/common'
import { TaskEntity } from '../../entities/task.entity'

@CommandHandler(UpdateTaskCommand)
@Dependencies(getRepositoryToken(TaskEntity))
export class UpdateTaskCommandHandler{
    constructor(repository){
        this.repository = repository
    }

    async execute(command){
        const { payloadId, payload, response } = command
        const task = await this.repository.preload({id: parseInt(payloadId), ...payload})
        if(!task)
            throw new NotFoundException(`La tache avec l'id ${id} n'existe pas`)
        return this.repository.save(task)
            .then(results => response.status(201).json({results, message: 'Task updated !'}))
            .catch(error => response.status(401).json({message: `An error has occurred : ${error}`}))
    }



}