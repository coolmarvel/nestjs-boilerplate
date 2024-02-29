import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelperModule } from './helper/helper.module';
import { ApiKeyModule } from './api-key/api-key.module';

import configs from 'src/configs';

@Module({ imports: [ConfigModule.forRoot({ load: configs, isGlobal: true, cache: true, envFilePath: ['.env'], expandVariables: true }), HelperModule, ApiKeyModule], providers: [] })
export class CommonModule {}
