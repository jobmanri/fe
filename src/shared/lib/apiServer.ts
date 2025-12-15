import ky from 'ky';

const API_BASE_URL = process.env.API_BASE_URL;

export const apiServer = ky.create({
    prefixUrl: API_BASE_URL
})

