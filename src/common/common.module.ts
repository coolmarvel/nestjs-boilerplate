import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelperModule } from './helper/helper.module';
import { HelperArrayServiceService } from './service/helper.array.service.service';
import { HelperDateServiceService } from './service/helper.date.service.service';
import { HelperEncryptionServiceService } from './service/helper.encryption.service.service';

import configs from 'src/config';

@Module({ imports: [ConfigModule.forRoot({ load: configs, isGlobal: true, cache: true, envFilePath: ['.env'], expandVariables: true }), HelperModule], providers: [HelperArrayServiceService, HelperDateServiceService, HelperEncryptionServiceService] })
export class CommonModule {}
