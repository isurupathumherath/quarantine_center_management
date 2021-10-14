const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// import routes
const ticketRoutes = require("./routes/Ticket-Admin"); //--Added by Vishara Prabuddhi--

const employeeRoutes = require("./routes/HRM/Employee"); //--Added by Isuru Pathum Herath--
const employeeSalaryRoute = require("./routes/HRM/Employee-Salary"); //--Added by Isuru Pathum Herath--

import financePaymentRoutes from "./routes/FinanceRoutes/financePayment"; //--Added by Janith gamage--
import financePayerRoutes from "./routes/FinanceRoutes/financePayer"; //--Added by Janith Gamage--
const PCRTestsRouter = require("./routes/MedicalTestsDetails/PCRTests.js");//--Added by Mathishi Adya Dissanayake--
const TempCheckupsRouter = require("./routes/MedicalTestsDetails/TempCheckups");//--Added by Mathishi Adya Dissanayake--
const PCRRepoRouter = require("./routes/MedicalTestsDetails/PCRReport1");//--Added by Mathishi Adya Dissanayake--


const FoodsRoute = require("./routes/foodroute/foodsRoute"); //--Added by Chamodh iduranga--
const CommentRoute = require("./routes/foodroute/commentRoute"); //--Added by Chamodh iduranga--
const OrderRoute = require("./routes/foodroute/orderRoute"); //--Added by Chamodh iduranga--
const OrderDetailsRoute = require("./routes/foodroute/orderDetailsRoute"); //--Added by Chamodh iduranga--
// App
const app = express();

// Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Route Middleware
app.use(ticketRoutes); //--Added by Vishara Prabuddhi--

app.use("/employee", employeeRoutes); //--Added by Isuru Pathum Herath--
app.use("/salary", employeeSalaryRoute); //--Added by Isuru Pathum Herath--

app.use("/payment", financePaymentRoutes); //--Added by Janith Gamage--
app.use("/payer", financePayerRoutes); //--Added by Janith Gamage--
app.use("/PCRTest",PCRTestsRouter);//--Added by Mathishi Adya Dissanayake--
app.use("/TempCheckup",TempCheckupsRouter);//--Added by Mathishi Adya Dissanayake--



app.use("/foods", FoodsRoute); //--Added by Chamodh iduranga--
app.use("/comment", CommentRoute); //--Added by Chamodh iduranga--
app.use("/order", OrderRoute); //--Added by Chamodh iduranga--
app.use("/orderdetails", OrderDetailsRoute); //--Added by Chamodh iduranga--

// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
