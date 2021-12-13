// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// import postRoutes from './routes/posts.js'

// const app = express();

// app.use(bodyParser.json({ limit:"30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
// app.use(cors());

// app.use('/posts', postRoutes)
// // const CONNECTION_URL = 'mongodb+srv://austin0302:as860302@cluster0.0hz3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

import path from 'path'; //mern on ec2

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.use(express.static("client/build"));
app.get("*", (req, res) => {
res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
}); //mern on ec2

// const CONNECTION_URL = 'mongodb+srv://austin0302:as860302@cluster0.0hz3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));