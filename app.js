
const express=require('express')
const app=express()
const path=require('path')
// const ejs=require('ejs')

//setting view engine as ejs
app.set('view engine','ejs');
//setting absolute path for views
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.render('index')
})

const port=process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})