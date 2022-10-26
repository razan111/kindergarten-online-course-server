const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const catagories = require('./data/catagories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) =>{
    res.send('App is running');
});

app.get('/course-catagories', (req, res)=>{
    res.send(catagories)
})

app.get('/cetagory/:id', (req, res) =>{
    const id = req.params.id 
   if(id === '08'){
    res.send(courses)
   }
   else{
    const cetagoryCourse = courses.filter(course => course.catagory_id === id);
    res.send(cetagoryCourse)
   }
})


app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    // console.log(id)
    const selectedCourses = courses.find(course => course._id === id)
    res.send(selectedCourses)
})


app.listen(port, ()=>{
    console.log('Courses server is running in port', port)
})