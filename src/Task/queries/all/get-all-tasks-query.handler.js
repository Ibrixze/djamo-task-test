import { QueryHandler } from '@nestjs/cqrs'
import { getAllTasksQuery } from './get-all-tasks.query'
import { getRepositoryToken } from '@nestjs/typeorm'
import { TaskEntity } from '../../entities/task.entity'
import { Dependencies } from '@nestjs/common'


@QueryHandler(getAllTasksQuery)
@Dependencies(getRepositoryToken(TaskEntity))
export class GetAllTasksQueryHandler{
    constructor(repository){
        this.repository = repository
    }
    async execute(query){
        const { response } = query
        return await this.repository.find()
            .then(results => response.status(201).json({results}))
            .catch(error => response.status(401).json({message: 'An error has occurred : ' + error }))
    }
}