import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { DatabaseService } from 'src/database/database.service'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri:
          configService.get('env') !== 'test'
            ? configService.get<string>('mongoDBConnectionString')
            : configService.get<string>('mongoDBTestConnectionString')
      }),
      inject: [ConfigService]
    })
  ],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
