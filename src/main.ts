import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import compression from '@fastify/compress'
import helmet from '@fastify/helmet'
import fastifyCsrf from '@fastify/csrf-protection'
import fastifyStatic from '@fastify/static'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import * as dotenv from 'dotenv'
import { join } from 'path'

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { cors: true })

  const config = new DocumentBuilder()
    .setTitle('Mar Clothing')
    .setDescription('The Mar clothing app API description')
    .setVersion('1.0')
    .addTag('Mar')
    .build()
  const document = SwaggerModule.createDocument(app, config, { ignoreGlobalPrefix: true })
  SwaggerModule.setup('api', app, document)
  app.register(fastifyStatic, {
    root: join(__dirname, '..', 'public') // Specify the path to your static files
  })
  await app.register(helmet, { contentSecurityPolicy: false })
  await app.register(compression, { encodings: ['gzip', 'deflate'] })
  await app.register(fastifyCsrf)
  await app.listen(process.env.PORT, '0.0.0.0')
}
bootstrap()
