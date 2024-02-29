import { registerAs } from '@nestjs/config';

export default registerAs(
  'debugger',
  (): Record<string, any> => ({
    http: {
      writeIntoFile: Boolean(process.env.DEBUGGER_HTTP_WRITE_INTO_FILE) === true,
      writeIntoConsole: Boolean(process.env.DEBUGGER_HTTP_WRITE_INTO_CONSOLE) === true,
      maxFiles: 5,
      maxSize: '2M',
    },
    system: {
      writeIntoFile: Boolean(process.env.DEBUGGER_SYSTEM_WRITE_INTO_FILE) === true,
      writeIntoConsole: Boolean(process.env.DEBUGGER_SYSTEM_WRITE_INTO_CONSOLE) === true,
      maxFiles: '7d',
      maxSize: '2m',
    },
  }),
);
