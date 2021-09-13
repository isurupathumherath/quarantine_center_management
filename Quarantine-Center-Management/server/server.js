const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const employeeRoutes = require('./routes/Employee'); //--Added by Isuru Pathum Herath--
const employeeSalaryRoute = require('./routes/Employee-Salary'); //--Added by Isuru Pathum Herath--
const PCRTestsRouter = require("./routes/MedicalTestsDetails/PCRTests.js");//--Added by Mathishi Adya Dissanayake--
const TempCheckupsRouter = require("./routes/MedicalTestsDetails/TempCheckups");//--Added by Mathishi Adya Dissanayake--

// App
const app = express();

// Database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Route Middleware
app.use('/employee', employeeRoutes); //--Added by Isuru Pathum Herath--
app.use('/salary', employeeSalaryRoute); //--Added by Isuru Pathum Herath--
app.use("/PCRTest",PCRTestsRouter);//--Added by Mathishi Adya Dissanayake--
app.use("/TempCheckup",TempCheckupsRouter);//--Added by Mathishi Adya Dissanayake--

// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
