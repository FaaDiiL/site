import { join } from 'node:path'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ContactModule } from './contact/contact.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.getOrThrow<string>('MONGODB_URI'),
        // Atlas-URI utan databasnamn landar annars i `test`, där användaren saknar write.
        dbName: config.get<string>('MONGODB_DB') ?? 'site',
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'frontend', 'dist'),
      exclude: ['/api/{*path}'],
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
