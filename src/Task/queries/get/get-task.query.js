import { IQuery } from '@nestjs/cqrs'


export class getTaskQuery{
    constructor(id, response){
        this.id = id 
        this.response = response
    }
}