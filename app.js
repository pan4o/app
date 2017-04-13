var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var posts = [
	{
		title: 'My first Post',
		content: 'Text text text text11'
	},
	{
		title: 'My second Post',
		content: 'Text text text text22'
	},
	{
		title: 'My third Post',
		content: 'Text text text text33'
	}
];

app.get('/', function (request, response) {
	response.render('index.ejs', {posts: posts});
});

app.get('/post/:id', function (request, response) {
	var id = request.params.id;
	response.render('post.ejs', {post: posts[id - 1]});
});

app.get('/write/', function (request, response) {
	response.render('write.ejs');
});

app.post('/write/', function (request, response) {
	var title = request.body.title,
		content = request.body.content;

	posts.push({
		title: title,
		content: content
	});

	response.redirect('/');
});

app.listen(3000, function () {
	console.log('work on 3000 port!');
});
