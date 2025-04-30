import { createServer } from "http";
import usersGetController from './controller/usersController.js';

const app = createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/api/v1/users") {
        usersGetController(req, res);
    } 
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
