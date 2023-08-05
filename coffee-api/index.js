const express = require('express');
const config = require('config');
const coffee = require('./routes/coffee')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/coffee', coffee);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('Application Name: ' + config.get('name'));