import dotenv from 'dotenv';

const environment = process.env.TEST_ENV || 'qa';

dotenv.config({
    path: `.env.${environment}`
});