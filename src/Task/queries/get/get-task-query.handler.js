import { Dependencies } from '@nestjs/common'
import { QueryHandler } from '@nestjs/cqrs'
import { getTaskQuery } from './get-task.query'
import { getRepositoryToken } from '@nestjs/typeorm'
import { TaskEntity } from '../../entities/task.entity'


@QueryHandler(getTaskQuery)
@Dependencies(getRepositoryToken(TaskEntity))
export class GetTaskQueryHandler{
    constructor(repository){
        this.repository = repository
    }
    async execute({id}){
            console.log(id)
        return await this.repository.findOne(id)
            .then(results => response.status(201).json({results}))
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error }))
    }
}