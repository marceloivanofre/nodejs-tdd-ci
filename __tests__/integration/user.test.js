import request from 'supertest';

import app from '../../src/app';
import truncate from '../util/truncate';
import factory from '../factories';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with empty name', async () => {
    const user = await factory.attrs('User', { name: '' });

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(404);
  });

  it('should not be able to register with empty password', async () => {
    const user = await factory.attrs('User', { password: '' });

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(404);
  });

  it('should not be able to register with empty email', async () => {
    const user = await factory.attrs('User', { email: '' });

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(404);
  });

  it('should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User', {
      email: 'marceloivanofre13@gmail.com',
    });

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(404);
  });
});
