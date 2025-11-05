const request = require('supertest');
require('dotenv').config();
const app = require('../app');

describe('Unit Test /', () => {
  it('should respond with index.html', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});