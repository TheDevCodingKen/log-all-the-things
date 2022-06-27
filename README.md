This repository contains the source code for my custom logger middleware.

The purpose of this project was to build my own custom logger that will log some information about each request it receives and then transform that data. I also exposed an endpoint on the server so it would be easy for anyone to retrieve the latest log data from the web.

Steps Taken:

1. Implemented a web server using the Express framework and Node.js
2. Logged all incoming requests with my custom logging middleware
3. Created a log file in CSV format and containing pre-defined headers
4. Installed an npm module to convert the CSV file to JSON format
5. Write code:
   - to generate a log line for every request
   - to provide a status message to the user
   - so my server will return a JSON object with all the contents of the log file

Contents of this site are © Copyright 2022 TheDevCodingKen. All rights reserved.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
