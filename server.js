const { response } = require("express");
const express = require("express");
const connectDB = require("./config/database");

const app = express();

// connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

app.get("/", (request, response) => response.send("API Running !!"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));