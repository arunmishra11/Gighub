// Dependencies
const express = require('express'); // Import express framework 
const path = require('path'); // Import path to work with files and directory paths 
const session = require('express-session'); // Import express session for managing sessions and storing sessions in cookies
const exphbs = require('express-handlebars'); // Import express handlebars to use Handlebars as templating engine
const routes = require('./controllers'); // Import routes from controllers directory
const helpers = require('./utils/helpers'); // Import helper function file from utils folder
const dotenv = require('dotenv'); 
const sequelize = require('./config/connection'); // Import the Sequelize instance for database connection configuration
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Import the Sequelize store for session storage

dotenv.config();

const app = express(); // Set up express application
const PORT = process.env.PORT || 3001; // Define the port the server will listen on

const hbs = exphbs.create({helpers}); // Set up handbars engine, passing in the helpers function

// Define a session configuration object named 'sess'
const sess = {
    secret: 'Secret',
    cookie: {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
};
app.use(session(sess)); // Use the session middleware with the configuration set to sess. This sets up session management for the express application.

app.engine('handlebars', hbs.engine); // Creates handlebars template engine to use
app.set('view engine', 'handlebars'); // Sets handlebars template engine

app.use(express.json()); // Middleware to parse JSON data in the request body
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded data in the request body, extended: true allows for rich(?) objeects and arrays to be encoded into the URL-encoded format
app.use(express.static(path.join(__dirname, 'public'))); //Middleware to serve static files from the 'public' directory
app.use(routes); // Set the routes object for various endpoints in the application



// Sync the sequelize models with the database
// force: false ensures that existing tables are not dropped and recreated, preserving data
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>  console.log(`Server listening on: http://localhost: ${PORT}`)) // Start the server and listen on specified port
})