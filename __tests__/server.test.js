'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
    // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/hello');
    expect(response.status).toBe(404);
  });

  it('can add a record', async () => {
    const response = await mockRequest.post('/animals').send({name: 'Elephant'});
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Elephant');
});

it('can get a list of records', async () => {
    const response = await mockRequest.get('/animals');
    expect(response.status).toBe(404);
});

it('can get a record', async () => {
    const response = await mockRequest.get('/animals/:id');
    expect(response.status).toBe(404);
});

it('can update a record', async () => {
    const response = await mockRequest.put('/animals/:id');
    expect(response.status).toBe(404);
});

it('can delete a record', async () => {
    const response = await mockRequest.delete('/animals/:id');
    expect(response.status).toBe(404);
});

});