

const express = require('express');
const fs = require('fs'); 
const cors = require('cors');
const path = require('path');
const app = express();

/*app.get('/video', (req,res) => {
    res.sendFile('assets/video1.mp4',{root: __dirname});
    console.log('Streaming video right now');
});*/ 

const videos = require('./routes/video')
app.use('/videos', videos)

app.use(cors())
 
app.listen(5100, () => { 
    console.log('Listening on port 5100')
});