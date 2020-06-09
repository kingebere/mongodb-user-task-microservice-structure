const express = require('express');
require('./mongoose')

//Router connection to Index.js
const UserRouter=require('../Routers/User')
const TaskRouter=require('../Routers/task')

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter)

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));