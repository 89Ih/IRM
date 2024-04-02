const request = require('supertest');
const app = require('../app');

describe('Express App', () => {
  // Test if the server is running and responds with status 200
  it('responds with status 200', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
  });

  // Test if the server responds with "Hello, world!" for the index route
  it('responds with "Hello, world!"', async () => {
    const response = await request(app).get('/api');
    expect(response.text).toBe('Hello, world!');
  });

  // Add more test specs as needed to cover your application's functionality
});
