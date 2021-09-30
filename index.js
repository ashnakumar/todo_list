const express = require('express');
const app = express();
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
var tasks = ['Complete todo list project'];
var tmpArr = [];


function check(idx){return (idx < tasks.length && idx >= 0);}

app.get('/', function(req, res){res.render(__dirname + '/index.hbs', {tasks});});

app.post('/add', function(req, res){
    tasks.push(req.body.task);
    tmpArr.push(tasks);
    res.redirect('/');
});

app.post('/del', function(req, res){
    const result = check(req.body.task);
    if(result)tasks.splice(req.body.task, 1);
    else tmpArr.push(result);
    res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, function(){console.log(`Listening to ${port}`)});