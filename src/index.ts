import express from "express";
import userRoutes from './routes/userRoutes'
import tweetRoutes from './routes/tweetRoutes'

// Constants
const port = 3000;
const app = express();

app.use(express.json());
app.use('/user',userRoutes);
app.use('/tweet',tweetRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(port, () => {
  console.log(`Server is start listening on Port: ${port}`);
});
