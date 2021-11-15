import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TaskModule } from './Task/task.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskEntity } from './Task/entities/task.entity'
import { TaskSchema } from './Task/entities/task.schema'
import { ApiSwaggerMiddleware, ApiSwaggerSetupMiddleware } from './Docs/older-version/api-docs.middleware'
import { ApiDocsModule } from './Docs/older-version/api-docs.module'

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'djamo_task_test',
      entities: [TaskSchema],
      synchronize: true,

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
