import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskEntity } from './entities/task.entity';
import { TaskSchema } from './entities/task.schema';
import {TaskController} from './task.controller';
import { TaskService } from './task.service';
// import { TaskEntity } from './entities/task.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TaskEntity])],
    controllers: [TaskController],
    providers: [TaskService]
})
export class TaskModule{}