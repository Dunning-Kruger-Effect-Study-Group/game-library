import request from 'supertest';
import { app } from '../app';
import { IPlatform } from '@game-library/types';
import { GetConnection } from '../db/connection';
import { Models } from '../model/models';

const dummy: IPlatform = {
  name: 'test',
  releases: [],
};

let list: Array<IPlatform>;

describe('Platform', () => {
  test('Create with valid data', (done) => {
    request(app)
      .post('/platform')
      .send(dummy)
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
  test('Create duplicate', (done) => {
    request(app)
      .post('/platform')
      .send(dummy)
      .then((response) => {
        expect(response.status).toBe(409);
        done();
      });
  });
  test('Create with no data', (done) => {
    request(app)
      .post('/platform')
      .then((response) => {
        expect(response.status).toBe(500);
        done();
      });
  });
  test('Read list', (done) => {
    request(app)
      .get('/platform/list')
      .then((response) => {
        list = response.body;
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        done();
      });
  });
  test('Update valid', (done) => {
    request(app)
      .put('/platform')
      .send({ ...list[0], name: 'update' })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body['modifiedCount']).toBe(1);
        done();
      });
  });
  test('Update duplicate', (done) => {
    request(app)
      .put('/platform')
      .send({ ...list[0], name: 'update' })
      .then((response) => {
        expect(response.status).toBe(409);
        done();
      });
  });
});

afterAll(async () => {
  const db = GetConnection();
  const model = db.model(Models.Platform);

  await model.deleteMany({
    $or: [{ name: 'test' }, { name: 'update' }],
  });
});
