import { AddTaskCommandHandler } from "./add/add-task-command.handler";
import { DeleteTaskCommandHandler } from "./delete/delete-task-command.handler";
import { UpdateTaskCommandHandler } from "./update/update-task-command.handler";

export const CommandHandlers = [
    AddTaskCommandHandler,
    UpdateTaskCommandHandler,
    DeleteTaskCommandHandler
]