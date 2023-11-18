import { config } from 'dotenv';
if (!process.env['NX_INVOKED_BY_RUNNER']) {
  config({ path: __dirname + '/.env.test' });
}