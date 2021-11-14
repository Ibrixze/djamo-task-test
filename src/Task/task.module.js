import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CqrsModule } from '@nestjs/cqrs'
import { TaskEntity } from './entities/task.entity'
import { TaskSchema } from './entities/task.schema'
import {TaskController} from './controllers/task.controller'
import { TaskService } from './services/task.service'
import { QueryHandlers } from './queries/index'
import { CommandHandlers } from './commands/index'
// import { TaskEntity } from './entities/task.entity';

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([TaskEntity])],
    controllers: [TaskController],
    providers: [
        TaskService,
        ...QueryHandlers,
        ...CommandHandlers
    ]
})
export class TaskModule{}