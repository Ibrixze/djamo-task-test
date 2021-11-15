import { Module } from '@nestjs/common'
import { ApiDocsController } from './api-docs.controller';


@Module({
    imports: [],
    controllers: [ApiDocsController],
    providers: []
})

export class ApiDocsModule{}