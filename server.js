const express = require('express');
const port = process.env.PORT || 8080;
app = express();
app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function(req,res) {
  res.sendfile(__dirname + '/dist/index.html');
});
app.listen(port);
console.log(`SERVER STARTED on PORT: ${port}`);
