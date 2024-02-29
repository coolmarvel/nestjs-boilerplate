import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelperModule } from './helper/helper.module';

import configs from 'src/config';

@Module({ imports: [ConfigModule.forRoot({ load: configs, isGlobal: true, cache: true, envFilePath: ['.env'], expandVariables: true }), HelperModule], providers: [] })
export class CommonModule {}
