import { Global, Module } from '@nestjs/common';
import { HelperArrayService } from './services/helper.array.service.service';
import { HelperDateService } from './services/helper.date.service.service';
import { HelperEncryptionService } from './services/helper.encryption.service.service';
import { HelperHashService } from './services/helper.hash.service';
import { HelperNumberService } from './services/helper.number.service';
import { HelperStringService } from './services/helper.string.service';
import { HelperFileService } from './services/helper.file.service';
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
