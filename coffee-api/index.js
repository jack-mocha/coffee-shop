const express = require('express');
const coffee = require('./routes/coffee')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/coffee', coffee);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
