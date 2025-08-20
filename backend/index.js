import express from 'express';
import {config} from "dotenv";
import mongoose from 'mongoose';
import foodRoute from './routes/foodRoute.js';
import {authRouter} from './contollers/authController.js';
import {auth} from "./middleware/authMiddleware.js";
import cors from 'cors';
import User from './models/user.js';
import pkg from 'cloudinary'; 
const { v2: cloudinary } = pkg;
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

config();

const app = express();

app.use(cors());

app.listen(process.env.PORT,()=>console.log(`listening on port${process.env.PORT} PORT`));

mongoose
.connect(process.env.mongodb)
.then(()=>console.log('connected to mongodb'))
.catch(err=>console.log(err));


app.use(express.json());
app.use('/food',foodRoute);



app.use ('/auth',authRouter);
app.use(auth);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use((req, res, next) => {
    req.cloudinary = cloudinary;
    next();
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'images',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    }
});

const parser = multer({ storage: storage });

app.post('/upload-image', auth, parser.single('file'), (req, res) => {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        try {
            if (!req.file.path) {
                throw new Error('File uploaded, but no path available');
            }

            res.json({ secure_url: req.file.path });
        } catch (error) {
            console.error('Error during file upload: ', error);
            res.status(500).send('Internal server error');
        }
});

app.get('/userProfile', auth, async (req, res) => {
    try {

        const user = await User.findById(req.user.id).select('-password')
        if (!user) {
            return res.status(404).json({ msg: 'User not found'});
        }

        res.json(user);

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// app.use('/webhooks', webhookRouter);
