// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import routes
const comments = require('./routes/comments');

// Import database
const {sequelize} = require('./models');

// Set up web server
const port = process.env.PORT || 8081;

// Create web server
const app = express();

// Use middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/comments', comments);

// Start web server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}); // End of sequelize.sync()

// End of file

