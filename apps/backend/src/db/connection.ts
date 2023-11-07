import mongoose from 'mongoose';
import { setModels } from '../model/models';

let conn: mongoose.Connection;

export function GetConnection() {
  if (conn === undefined) {
    ConnectToDB();
  } else return conn;
}

const OPTIONS: mongoose.ConnectOptions = {
  minPoolSize: 15,
  auth: { username: 'root', password: 'example' },
  dbName: 'game-library',
  autoIndex:false,
};

export function ConnectToDB() {
  // Configure mongoose connection and models
  const MONGODB_CONNECTION = '' + process.env.MONGODB_CONNECTION;
  try {
    conn = mongoose.createConnection(MONGODB_CONNECTION, OPTIONS);
  } catch (error) {
    console.log(error.message);
  }
  conn.on('connectionClosed', async () => {
    console.log('disconected from DB');
    let retry = 1;
    while (conn.readyState != 1) {
      const retryInitTime = new Date();
      const time = retry * 1000;
      setTimeout(() => {
        console.log(`Retrying connection, attempt #${retry}`);
        try {
          conn = mongoose.createConnection(MONGODB_CONNECTION, OPTIONS);
        } catch (error) {
          const retryEndTime = new Date();
          const diffTime =
            retryInitTime.getMilliseconds() - retryEndTime.getMilliseconds();
          console.log(`Attempt failed after ${diffTime}ms`);
        }
      }, time);
      retry++;
    }
  });
  conn.on('connectionOpen', async () => {
    console.log('Connected to DB');
  });
  setModels(conn);
}
