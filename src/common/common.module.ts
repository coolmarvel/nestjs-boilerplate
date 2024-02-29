import { Module } from '@nestjs/common';
import { HelperModule } from './helper/helper.module';
import { SettingModule } from './setting/setting.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from './database/constants/database.constant';
import { DatabaseOptionsModule } from './database/database.options.module';
import { DatabaseOptionsService } from './database/services/database.options.service';
import { RequestModule } from './request/request.module';
import { ResponseModule } from './response/response.module';
import { PaginationModule } from './pagination/pagination.module';
import { MessageModule } from './message/message.module';
import { ErrorModule } from './error/error.module';
import { DebuggerModule } from './debugger/debugger.module';
import { PolicyModule } from './policy/policy.module';
import { LoggerModule } from './logger/logger.module';
import { ApiKeyModule } from './api-key/api-key.module';

@Module({
  imports: [
    MessageModule,
    HelperModule,
    PaginationModule,
    ErrorModule,
    DebuggerModule.forRoot(),
    RequestModule,
    ResponseModule,
    PolicyModule,
    SettingModule,
    LoggerModule,
    ApiKeyModule,
    MongooseModule.forRootAsync({
      connectionName: DATABASE_CONNECTION_NAME,
      imports: [DatabaseOptionsModule],
      inject: [DatabaseOptionsService],
      useFactory: (databaseOptionsService: DatabaseOptionsService) => databaseOptionsService.createOptions(),
    }),
  ],
  providers: [],
})
export class CommonModule {}
