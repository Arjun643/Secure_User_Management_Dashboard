import axios from 'axios';
import { login, register } from './httpService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('login', async () => {
  mockedAxios.post.mockResolvedValue({
    data: { token: '12345' },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: { url: '/login' },
  });

  const response = await login('test@example.com', 'password');
  expect((response.data as any).token).toBe('12345');
});

test('register', async () => {
  mockedAxios.post.mockResolvedValue({
    data: { id: '12345' },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: { url: '/register' },
  });

  const response = await register('test@example.com', 'password');
  expect((response.data as any).id).toBe('12345');
});
