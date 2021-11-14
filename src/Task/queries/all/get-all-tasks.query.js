import { IQuery } from '@nestjs/cqrs'


export class getAllTasksQuery{
    constructor(response){
        this.response = response
    }
}