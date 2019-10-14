
const net = require('net');
const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {
  // `req` is an http.IncomingMessage, which is a Readable Stream.
  // `res` is an http.ServerResponse, which is a Writable Stream.

  

  const formData = {
      // Pass a simple key-value pair
      my_field: 'my_value',
      // Pass data via Buffers
      my_buffer: Buffer.from([1, 2, 3]),
      // Pass data via Streams
      my_file: fs.createReadStream(__dirname + '/../add.png'),
      // Pass multiple values /w an Array
      attachments: [
        fs.createReadStream(__dirname + '/server.js'),
      //   fs.createReadStream(__dirname + '/attachment2.jpg')
      ],
      // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
      // Use case: for some types of streams, you'll need to provide "file"-related information manually.
      // See the `form-data` README for more information about options: https://github.com/form-data/form-data
      custom_file: {
        value:  fs.createReadStream('/dev/urandom'),
        options: {
          filename: 'topsecret.jpg',
          contentType: 'image/jpeg'
        }
      }
    };
    request.post({url:'http://localhost:3000/', formData: formData}, function optionalCallback(err, httpResponse, body) {
        if (err) {
          return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
      });
  let body = '';
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added.
  req.on('data', (chunk) => {
    body += chunk;
  });

  // The 'end' event indicates that the entire body has been received.
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // Write back something interesting to the user:
      res.write(typeof data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});


server.listen(1337);

// const formData = {
//     // Pass a simple key-value pair
//     my_field: 'my_value',
//     // Pass data via Buffers
//     my_buffer: Buffer.from([1, 2, 3]),
//     // Pass data via Streams
//     my_file: fs.createReadStream(__dirname + '/../add.png'),
//     // Pass multiple values /w an Array
//     attachments: [
//       fs.createReadStream(__dirname + '/server.js'),
//     //   fs.createReadStream(__dirname + '/attachment2.jpg')
//     ],
//     // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
//     // Use case: for some types of streams, you'll need to provide "file"-related information manually.
//     // See the `form-data` README for more information about options: https://github.com/form-data/form-data
//     custom_file: {
//       value:  fs.createReadStream('/dev/urandom'),
//       options: {
//         filename: 'topsecret.jpg',
//         contentType: 'image/jpeg'
//       }
//     }
//   };
//   request.post({url:'http://localhost:3000/forms', formData: formData}, function optionalCallback(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
//   console.log('Upload successful!  Server responded with:', body);
// });
// // Create an HTTP tunneling proxy
// const proxy = http.createServer((req, resp) => {
//         const form = request.form('http://localhost:3332/forms')
//         form.append('server',fs.createReadStream(__dirname+'/add.png'),{filename:'new_add.jpg'});
//         attachments: [
//             fs.createReadStream(__dirname + '/attachment1.jpg'),
//             fs.createReadStream(__dirname + '/attachment2.jpg')
//           ],
//         const x = request('http://localhost:3332/'+req.url.pathname)
//         req.pipe(x)
//         x.pipe(resp)
// });
// ;
// form.append('my_field', 'my_value');
// form.append('my_buffer', Buffer.from([1, 2, 3]));
// form.append('custom_file', fs.createReadStream(__dirname + '/unicycle.jpg'), {filename: 'unicycle.jpg'});
// // proxy.on('connect', (req, cltSocket, head) => {})
// //   // Connect to an origin server
// //   const srvUrl = url.parse(`http://${req.url}`);
// //   const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
// //     cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
// //                     'Proxy-agent: Node.js-Proxy\r\n' +
// //                     '\r\n');
// //     srvSocket.write(head);
// //     srvSocket.pipe(cltSocket);
// //     cltSocket.pipe(srvSocket);
// //   });
// // Workaround.
// net.createServer((socket) => {
//     socket.on('end', () => {
//       socket.end('The message was received but was not processed.\n');
//     });
  
//     // Start the flow of data, discarding it.
//     socket.resume();
//   }).listen(1337);

// const fs = require('fs');
// const rr = fs.createReadStream('foo.txt');
// rr.on('readable', () => {
//   console.log(`readable: ${rr.read()}`);
// });
// rr.on('end', () => {
//   console.log('end');
// });

// // Now that proxy is running
// proxy.listen(1337, '127.0.0.1', () => {console.log('here')})

  