const app = require("./app");
const dotenv =require("dotenv");
const connectDatabase = require("./config/database")

//Handling uncaught exception

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process
});

//Config 
dotenv.config({path:"backend/config/config.env"});

connectDatabase();

const server= app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


//Unhandled Promise Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to Unhandled Promise Rejection`);

    server.close(()=>{
       process.exit(1); 
    });
});