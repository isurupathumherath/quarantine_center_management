const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const router = express.Router();
require("dotenv").config();

// import routes
const ticketRoutes = require("./routes/Ticket-Admin"); //--Added by Vishara Prabuddhi--

const employeeRoutes = require("./routes/HRM/Employee"); //--Added by Isuru Pathum Herath--
const employeeSalaryRoute = require("./routes/HRM/Employee-Salary"); //--Added by Isuru Pathum Herath--

import financePaymentRoutes from "./routes/FinanceRoutes/financePayment"; //--Added by Janith gamage--
import financePayerRoutes from "./routes/FinanceRoutes/financePayer"; //--Added by Janith Gamage--
const FoodsRoute = require("./routes/foodroute/foodsRoute");
const CommentRoute = require("./routes/foodroute/commentRoute");
const OrderRoute = require("./routes/foodroute/orderRoute");
const OrderDetailsRoute = require("./routes/foodroute/orderDetailsRoute");
const profileRoutes = require('./routes/UserManagement/uprofile');//--Added by Hirusha Rukmal--

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

// Express Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Route Middleware
app.use(ticketRoutes); //--Added by Vishara Prabuddhi--

app.use("/employee", employeeRoutes); //--Added by Isuru Pathum Herath--
app.use("/salary", employeeSalaryRoute); //--Added by Isuru Pathum Herath--

app.use("/payment", financePaymentRoutes); //--Added by Janith Gamage--
app.use("/payer", financePayerRoutes); //--Added by Janith Gamage--
app.use("/foods", FoodsRoute);
app.use("/comment", CommentRoute);
app.use("/order", OrderRoute);
app.use("/orderdetails", OrderDetailsRoute);
app.use(profileRoutes);//--Added by Hirusha Rukmal--


// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
