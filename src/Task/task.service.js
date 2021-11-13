import { Injectable, Dependencies } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm' 
import { TaskEntity } from './entities/task.entity'
import { TaskSchema } from './entities/task.schema'
 
@Injectable()
@Dependencies(getRepositoryToken(TaskEntity))
export class TaskService {
    constructor(TaskRepository){
        this.tasksRepository = TaskRepository
        // this.tasks = [
        //     {   
        //         id: 1,
        //         task: 'task 1',
        //         description: 'la premiere tache'
        //     },
        //     {
        //         id: 2,
        //         task: 'task 2',
        //         description: 'la seconde tache'
        //     },
        //     {
        //         id:3,
        //         task: 'task 3',
        //         description: 'la troisieme tache'
        //     }
        // ]
    }
    
    async getAll(){
        return await this.tasksRepository.find()
    }

    async get(id){
        id = parseInt(id)
        return await this.tasksRepository.findOne(id)
    }

    async create(task){
        return await this.tasksRepository.save(task)    
    }

    // async update(datas, id){
    //     id = parseInt(id)
    //     return await this.tasksRepository.update(id, datas)
    // }

    async remove(id){
        const task = await this.tasksRepository.findOne(id).then(result => result.json())
       return await this.tasksRepository.remove(task)
    }
}