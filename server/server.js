// import express from 'express'
// import 'dotenv/config'
// import cors from 'cors'
// import connectDB from './configs/db.js';
// import adminRouter from './routes/adminRoutes.js';
// import blogRouter from './routes/blogRoutes.js';

// const app = express();

// await connectDB()
// //Middlewares
// app.use(cors())
// app.use(express.json())

// //Routes
// app.get('/', (req,res)=> res.send("API is Working"))
// app.use('/api/admin' ,adminRouter)
// app.use('/api/blog' ,blogRouter)

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, ()=>{
//     console.log('Server is running on port' + PORT)

// })

// export default app;

import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

// Connect to DB
await connectDB();

// ✅ Middlewares
app.use(cors({
    origin: [
        "http://localhost:5173",              // Local React
        "https://projectblog-nine.vercel.app" // Production React on Vercel
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// ✅ Routes
app.get('/', (req, res) => res.send("API is Working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// ✅ Server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

export default app;

