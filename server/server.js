const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const db = require("./config/database");
db.connect();

const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: ["http://localhost:5173","https://my-portfolio-uu.netlify.app/"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));


app.options("/api/v1/contact", cors(corsOptions));



app.use(express.json());

const userMail = require("./routes/sendMail");

app.use("/api/v1/contact",userMail);

//default route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"your server is running ...."
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})

