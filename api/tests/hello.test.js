// tests/hello.test.js
const request = require('supertest');
const app = require('../src/index');

describe('GET /api/v1/hello', () => {
  it('responds with JSON { message: "Hello, Synchrypt!" }', async () => {
    const res = await request(app).get('/api/v1/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, Synchrypt!' });
  });
});
