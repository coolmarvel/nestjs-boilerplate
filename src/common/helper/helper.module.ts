import { Global, Module } from '@nestjs/common';
import { HelperArrayService } from './service/helper.array.service.service';
import { HelperDateService } from './service/helper.date.service.service';
import { HelperEncryptionService } from './service/helper.encryption.service.service';
import { HelperHashService } from './service/helper.hash.service';
import { HelperNumberService } from './service/helper.number.service';
import { HelperStringService } from './service/helper.string.service';
import { HelperFileService } from './service/helper.file.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('helper.jwt.defaultSecretKey'),
        signOptions: { expiresIn: configService.get<string>('helper.jwt.defaultExpirationTime') },
      }),
    }),
  ],
  providers: [HelperArrayService, HelperDateService, HelperEncryptionService, HelperHashService, HelperNumberService, HelperStringService, HelperFileService],
  exports: [HelperArrayService, HelperDateService, HelperEncryptionService, HelperHashService, HelperNumberService, HelperStringService, HelperFileService],
  controllers: [],
})
export class HelperModule {}
