import { TaskEntity } from "../../entities/task.entity";
import { Dependencies } from '@nestjs/common'


@Dependencies(TaskEntity)
export class AddTaskCommand{
    constructor(payload, response){
        this.payload = payload
        this.response = response
    }
}