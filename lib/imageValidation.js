var request = require("sync-request");
var o_O = require("monocle-js").o_O;
var yiewd = require("yiewd");

function UrlException(message) {
   this.message = message;
   this.name = 'UrlException';
}

var isLoaded = function(url) {
  if (url === null || url === undefined || url === "") {
    throw new UrlException("Url cannot be null/blank.");
  }
  var res = request("GET", url);
  var status = res.statusCode;
  // verifying response code he HttpStatus should be 200 if not.
  return status === 200 || status === 302 ? true : false;
};

module.exports = {
  isLoaded: isLoaded
};
