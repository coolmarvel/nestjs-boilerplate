import { registerAs } from '@nestjs/config';
import { version } from 'package.json';

import { ENUM_APP_ENVIRONMENT } from 'src/constants/app.enum.constant';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    name: process.env.APP_NAME ?? 'coolmarvel',
    env: process.env.APP_ENV ?? ENUM_APP_ENVIRONMENT.DEVELOPMENT,

    repoVersion: version,
    versioning: {
      enable: Boolean(process.env.HTTP_VERSIONING_ENABLE) === true ?? false,
      prefix: 'v',
      version: process.env.HTTP_VERSION ?? '1',
    },

    globalPrefix: '/api',
    http: {
      enable: Boolean(process.env.HTTP_ENABLE) === true ?? false,
      host: process.env.HTTP_HOST ?? 'localhost',
      port: process.env.HTTP_PORT ? Number(process.env.HTTP_PORT) : 3000,
    },

    jobEnable: Boolean(process.env.JOB_ENABLE) === true ?? false,
  }),
);
