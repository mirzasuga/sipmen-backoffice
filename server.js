const express = require('express');
const port = process.env.PORT || 80;
// const host = process.env.HOST || '127.0.0.1';
app = express();
app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function(req,res) {
  res.sendfile(__dirname + '/dist/index.html');
});
app.listen(port);
console.log(`SERVER STARTED on PORT ${port}`);
