// Define the middleware function name 'withAuth'
const withAuth = (req, res, next) => {
    // Check if the user is not logged in
    if (!req.session.logged_in) {
      res.redirect('/login'); // Redirect the request to the login route
    } else {
      next(); // If logged in, call the next middleware in the stack
    }
  };
  
  module.exports = withAuth; // Export withAuth middleware