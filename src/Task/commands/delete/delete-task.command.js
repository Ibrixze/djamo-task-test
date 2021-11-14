import { TaskEntity } from "../../entities/task.entity";

// @Dependencies(TaskEntity)
export class DeleteTaskCommand{
    constructor(payload, response){
        this.payload = payload
        this.response = response
    }
}