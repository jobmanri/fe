import ky from 'ky';

export const apiClient = ky.create({
  prefixUrl: '/api',
  credentials: 'include',
});