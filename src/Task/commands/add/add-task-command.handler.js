import { CommandHandler } from '@nestjs/cqrs'
import { AddTaskCommand } from './add-task.command'
import { getRepositoryToken } from '@nestjs/typeorm'
import { TaskEntity } from '../../entities/task.entity'

@CommandHandler(AddTaskCommand)
// @Dependencies(getRepositoryToken(TaskEntity))
export class AddTaskCommandHandler{
    constructor(repository){
        this.repository = repository
    }

    async execute(command){
        const { payload, response } = command
        return this.repository.save(payload)
            .then(results => response.status(201).json({results, message: 'Post added !'}))
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error}))
    }



}