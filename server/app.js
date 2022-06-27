// Import modules
const express = require('express');
const fs = require('fs');
const csv = require('csvtojson');

// Create Express application object
const app = express();
app.set('json spaces', 2); // Add spaces into the output JSON string for improved readability

// Define a custom logger and apply it to each request
app.use((req, res, next) => {
    // Define variables for each type of data
    const agent = req.headers['user-agent'].replace(/,/g,'');
    const time = new Date().toISOString();
    const method = req.method;
    const resource = req.originalUrl;
    const version = `HTTP/${req.httpVersion}`;
    const status = res.statusCode;
    // Define variable for the ouput of each log line
    const logline = `${agent},${time},${method},${resource},${version},${status}`;
    // Output the log line to the terminal for verification
    console.log(logline);

    // View the file contents after the append operation
    fs.appendFile("./server/log.csv",`\n${logline}`, (err) => {
        if (err) {
        console.log('There is an error while appending the file.')
        } else {
            console.log("Successfully appended the file.",
            fs.readFileSync("./server/log.csv", "utf8"));
        }
    })
    next();
});

app.get('/', (req, res) => {
    res.status(200).send("ok");
});

app.get('/logs', (req, res) => {
// Convert CSV file to JSON object with log data
    csv()
        .fromFile('./server/log.csv')
    .then((jsonLog)=>{
        // log the JSON array
        console.log(jsonLog);
        res.json(jsonLog);
});
});

// Ensure the app will respond with 404 if the resource requested is not found
app.get('*', function(req, res){
    res.status(404).end('No Page Found');
});

module.exports = app;
