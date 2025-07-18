// tests/health.test.js
const request = require('supertest');
const app = require('../src/index'); // we’ll export app in a moment

describe('GET /healthz', () => {
  it('should return 200 and { status: "ok" }', async () => {
    const res = await request(app).get('/healthz');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
