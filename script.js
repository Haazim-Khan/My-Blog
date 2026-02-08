import express from 'express';
import bodyParser from 'body-parser';

const app = express();

let id = 0;
let posts = [];
let isPost = false;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    if(!isPost){
        res.render('index', {blog: false});
    }
    else{
        res.render('index', {blog: true, post: posts});
    }
});

app.post('/posts', (req, res)=>{
    const data = req.body;
    id++;
    posts.push({id: id, title: data.title, content: data.content});
    isPost = true;
    res.redirect(303, '/');
});

app.post('/delete/:id', (req, res)=>{
    const id = req.params.id;
    for(let i = 0; i < posts.length; i++){
        if(posts[i]['id'] == id){
            posts.splice(i,1);
            break;
        }
    }
    if(posts.length == 0){
        isPost = false;
        res.redirect(303, '/');
    }
    else{
        res.redirect(303, '/');
    }
    
});

app.post('/edit/:id', (req, res)=>{
    const id = req.params.id;
    for(let i = 0; i < posts.length; i++){
        if(posts[i]['id'] == id){
            posts[i]['title'] = req.body.title;
            posts[i]['content'] = req.body.content;
            break;
        }
    }
    res.redirect(303, '/');
});

app.listen(3000, ()=>{
    console.log('Server Is Running...');
});