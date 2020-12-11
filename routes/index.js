var express = require('express');
const app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/',(req, res) => {
res.send('Hello World!');
});

module.exports = router;
app.listen(3000, () => console.log("Server Up and running"));
