var express = require('express');
var router = express.Router();
var rp = require('request-promise-native');


router.get('/', function (req, res, next) {
 
  var bodyHttp = " grant_type=password&client_id=bd046d28-2d91-4250-b07d-9488d2f0bf68&resource=https://analysis.windows.net/powerbi/api&scope=openid&username=powerbi@latize.com&password=8Ulysses1";

  var options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    uri: 'https://login.microsoftonline.com/common/oauth2/token',
    body: bodyHttp,
  };

  rp(options)
    .then(function (body) {
      var b = JSON.parse(body);
 
      res.json({
        token: b.access_token
      });
 
    })
    .catch(function (err) {
      console.log(err);
      response.json({
        error: 'No report Found'
      });
    });

});


module.exports = router;
