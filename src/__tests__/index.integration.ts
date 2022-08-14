import { appPort } from '../../index';
import request from 'supertest';

test('GET - / - Success to retrieve homepage endpoint', async () => {
    const res = await request(appPort).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello' });
});
