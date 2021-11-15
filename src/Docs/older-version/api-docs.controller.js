import { Controller, Get } from '@nestjs/common'
import swaggerUI from 'swagger-ui-express'
import Docs from '../index'
import swaggerJsDoc from 'swagger-jsdoc'
import basicInfos from '../basicInfos'
import components from '../components'
import servers from '../servers'
import tags from '../tags'
import task from '../Tasks/index'


@Controller('api-docs')
export class ApiDocsController{
    @Get('/')
    getDocs(){
        console.log('Not available')
    }
}