import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import leadRoutes from './routes/leadRoutes.js';
import emailRoutes from './routes/emailRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', applicationRoutes)
app.use('/api/leads', leadRoutes);
app.use('/api/email', emailRoutes);

app.get('/', (req, res) => {
    res.send('Lead Generation API Running');
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    console.log('MongoDB Connected');

    app.listen(process.env.PORT || 5000, () => {

        console.log(
            `Server running on port ${process.env.PORT}`
        );
    });

})
.catch((error) => {
    console.log(error);
});