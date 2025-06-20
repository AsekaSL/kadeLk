const app = require('./routes/app.js');
const host = '127.0.0.1';
const port = 3000;

const server = app.listen(port, host, () => {
    console.log(`Server succsfully connected! port no: ${server.address().port}`);
})