import { getAllTasks } from './get-all-task'
import { getTask } from './get-task'
import { addTask } from './add-task'
import { updateTask } from './update-task'
import { deleteTask } from './delete-task'


export default { 
    paths: {
        '/add':{
            ...addTask,
        },
        '/all':{
            ...getAllTasks
        },
        '/{id}':{
            ...getTask,
        },
        '/update/{id}':{
            ...updateTask,
        },
        '/remove':{
            ...deleteTask
        }
    }
}