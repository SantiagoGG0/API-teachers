 import dotenv from 'dotenv';
 dotenv.config();

 export default {
    port: process.env.PORT,
    databaseUrl1: process.env.DATABASE_URL
 }
