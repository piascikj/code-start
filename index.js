var prompt = require('prompt');

prompt.start();

prompt.get({
  properties: {
    start: {
      description: 'what would you like to do?',
      required: true
    }
  }

}, function(err, result) {
  var start = result.start;
  if (start === "fart") console.log('You smell like poo');
  if (start === "eat") console.log("Don't eat the poo");
  // console.log(result);
  // if (result.)
});
