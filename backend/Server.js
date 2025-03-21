import express from 'express';
import cors from 'cors';
import connectDB from './Config/db.js';
import foodRouter from './Route/foodroute.js';




//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors());


//db connection
connectDB();

//api endpoints


app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'));

app.get('/',(req,res)=>{
    res.send('Hello from the server')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})