const https = require('https');
var chunklist = "";

function getHTML (options, callback) {
    https.get(options,function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
          console.log('Chunk Received. Length:', data.length);
          chunklist += (data + "\n");
        });
        response.on('end', function(end) {
            callback(chunklist);
          console.log('Response stream complete.');
        });
        })
      }

  function printHTML (html) {
    console.log(html);
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML)