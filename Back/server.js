
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/Userroutes.js';
import cors from "cors"
// import producrroutes from './routes/Productroutes.js'
import multer from 'multer';

const app = express();
app.use(cors())

app.use(express.json());

app.use("/api", router)

app.use((req, res, next) => {


    console.log("middleware1 ");

    next()

})





const storage = multer.diskStorage({
    //   destination: function (req, file, cb) {
    //     cb(null, '/tmp/my-uploads')
    //   },
    destination: (req, file, cb) => {

        cb(null, "./upload")

    },
    filename: function (req, file, cb) {

        cb(null, Date.now() + " " + file.originalname)
    }
})



const upload = multer({ storage })



const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Kaviya');
        console.log('DB is connected successfully');
    } catch (error) {
        console.log('Database connection error:', error.message);
    }
};

connectDB();






app.post("/imageUpalod", upload.single("img"), async (req, res) => {


    try {

        res.json("file stored successfully.....")

    }

    catch (err) {


    }

})
// app.use('/products', producrroutes);

// app.get('/', (req, res) => {
//     res.send('Backend server is working!');
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
