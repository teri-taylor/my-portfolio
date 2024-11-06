const express = require('express'); // express framework for building web applications
const path = require('path'); //path module to work with file paths
const bodyParser = require('body-parser'); //middleware for parsing form data

const app = express(); //initialize an express application

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser to parse form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route for the Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Handle form submission from Contact page
app.post('/submit-form', (req, res) => {
    const { firstName, lastName, email, message } = req.body; //extract form data from the request body
    console.log(`Form submitted by: ${firstName} ${lastName}, Email: ${email}, Message: ${message}`); //log the form data to the console for server verification
    res.send('Thank you for your message!');  // You can replace this with a redirect or confirmation page. // respond to client after form submission
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
