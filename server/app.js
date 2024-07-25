const express = require('express');
const indexRouter = require('./routes/index.routes');
const serverConfig = require('./config /serverConfig');

const app = express();
const PORT = process.env.PORT ?? 3000;

// Конфигурация
serverConfig(app);

// Маршрутизация
app.use('/api', indexRouter);


app.listen(PORT, () => console.log(`server started at ${PORT} port`))
