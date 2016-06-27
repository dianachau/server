// var api_key = 'key-386926654b93f6d1da6252c58bbaa1ec';
// var domain = 'sandbox74421ce2614047cb8f8f8f147df9a166.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
//
// var data = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'dchaukeyboard@gmail.com',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomness!'
// };
//
// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
// });



//require the Twilio module and create a REST client
// var client = require('twilio')('ACaf798fdb9ccc23adb9856bbafe8bab5a', '4dbee1dd4b42cccbbb40ef2ccc34bb43');
//
// //Send an SMS text message
// client.sendMessage({
//
//     to:'+16172596512', // Any number Twilio can deliver to
//     from: '+12019497420', // A number you bought from Twilio and can use for outbound communication
//     body: 'word to your mother.' // body of the SMS message
//
// }, function(err, responseData) { //this function is executed when a response is received from Twilio
//
//     console.log(err)
//     if (!err) { // "err" is an error received during the request, if any
//
//         // "responseData" is a JavaScript object containing data received from Twilio.
//         // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
//         // http://www.twilio.com/docs/api/rest/sending-sms#example-1
//
//         console.log(responseData.from); // outputs "+14506667788"
//         console.log(responseData.body); // outputs "word to your mother."
//
//     }
// });

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/diana', function (req, res) {
  res.send('Hello Diana!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
