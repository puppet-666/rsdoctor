import { Constants } from '@rsdoctor/types';
import { Logger, createLogger } from './logger';

let debugLogger: Logger;

/**
 * log debug message
 */
export function debug(getMsg: () => string, prefix = '') {
  if (!process.env[Constants.RsdoctorProcessEnvDebugKey]) return;
  if (!debugLogger) {
    debugLogger = createLogger({ level: 'Debug' });
  }
  debugLogger.debug(prefix, getMsg());
}
