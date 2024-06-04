// Define the middleware function name 'withAuth'
const withAuth = (req, res, next) => {
    // Check if the user is not logged in
    console.log("Req Session: ", req.session);
    if (!req.session.logged_in) {
      res.redirect('/loginSignup'); // Redirect the request to the login route
    } else {
      console.log("we are logged in")
      next(); // If logged in, call the next middleware in the stack
    }
  };
  
  module.exports = withAuth; // Export withAuth middleware