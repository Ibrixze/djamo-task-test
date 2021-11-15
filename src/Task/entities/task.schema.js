import { EntitySchema } from "typeorm"
import { TaskEntity } from './task.entity'


export const TaskSchema = new EntitySchema({
    name: 'Task',
    target: TaskEntity,
    columns: { 
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        task: {
            type: String,
            nullable: false
        },
        description: {
            type: String,
        }
    }
})


