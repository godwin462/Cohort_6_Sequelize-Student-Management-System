const express = require('express');
const sequelize = require("./database/database");
const studentRouter = require('./routes/studentRouter');
const gradeRouter = require('./routes/gradesRouter');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(gradeRouter);
app.use(studentRouter);

const startServer = async ()=>{
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}}

startServer()



app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`);

})
