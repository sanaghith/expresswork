const express = require('express')
const app = express()

const Port = 5000

//config
app.use(express.static('public'))
app.set('view engine', 'ejs');



//mid
const checkTime = (req , res , next) => {
    const date = new Date()

    console.log('date', date)


    const day = date.getDay()
    console.log('day', day)
    const hours = date.getHours()
    console.log('hours', hours)

    if (day >= 1 && day <= 5 && hours >= 10 && hours <= 13 ) {
        return next()
    } else {
        return res.send('our site is close !!')
    }

}

//routes
app.get('/home', checkTime , (req , res) => {
    res.render('home')
})

app.get('/service', checkTime , (req,res) => {
    res.render('service')
})

app.get('/contact' , (req , res) => {
    res.render('contact')
})

//create server
app.listen(Port , checkTime , (err) => {
    err ? console.log("err" , err) :  console.log(`server running on ${Port}`)
})




