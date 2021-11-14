import { TaskEntity } from "../../entities/task.entity";

// @Dependencies(TaskEntity)
export class UpdateTaskCommand{
    constructor(payloadId, payload, response){
        this.payloadId = payloadId
        this.payload = payload
        this.response = response
    }
}