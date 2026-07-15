const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route"); // Nạp tờ menu route vào đây

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

// Đăng ký sử dụng menu route. Tất cả các đường dẫn trong contact.route.js 
// khi chạy thực tế sẽ phải bắt đầu bằng "/api/contacts"
app.use("/api/contacts", contactsRouter); 

module.exports = app;