const express = require('express');
const morgan = require('morgan');
//create express app

const app = express();

app.set('view engine','ejs');



//listen for requests
app.listen(3000);

//middleware & static files

app.use(express.static('public'));
app.use(morgan('tiny'));

app.use((req,res,next) =>{
	console.log('this is just a middleware');
	next();

})
app.get('/',(req,res)=>{
	const blogs = [
		{title: 'Great News in Science', snippet: 'Lorem ipsum dolar sit amet consectetur'},
	{title: 'Nasa found a new planet', snippet: 'Lorem ipsum dolar sit amet consectetur'},
	{title: 'Great News in Science', snippet: 'Lorem ipsum dolar sit amet consectetur'},
	]
	//res.send('<p>Hello World</p>');
	res.render('index',{title:'Home page',blogs});
})

app.get('/about',(req,res)=>{
	res.render('about',{title: 'About Page'});
	
})
app.get('/blogs/create',(req,res)=>{
	res.render('create',{title:'Create a Blog'});
	
})

//404 page

app.use((req,res)=>{
	res.status(404).render('404',{title: '404 Page Not Found'});
})




