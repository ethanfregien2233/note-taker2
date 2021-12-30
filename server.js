const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
}); 