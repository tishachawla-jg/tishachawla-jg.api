//task 1
const express = require('express');
 const app = express(); 
app.post('/', (req, res) => {
     return res.sendFile(__dirname+'/index.html');
    })
app.post('/square',(req,res)
{
    const n=parseInt(req.query.n);
    const sq=n*n;
    res.send(sq.toString());
    
})
      app.listen(3000, () => { 
          console.log('server is running');
         })
