const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// import routes  
import financePaymentRoutes from "./routes/FinanceRoutes/financePayment";  
import financePayerRoutes from "./routes/FinanceRoutes/financePayer";  
import FinanceInvoice from "./routes/FinanceRoutes/financeInvoice";

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

app.use("/payment", financePaymentRoutes); 
app.use("/payer", financePayerRoutes); 
app.use("/invoice", FinanceInvoice);   
 
// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
