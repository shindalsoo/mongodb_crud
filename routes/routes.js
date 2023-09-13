const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render("../views/index",{
        title:"mongodb_crud1111122222"
    })
})
router.get('/add', (req,res)=>{
    res.render('add_doc');
})
router.post('/add', (req,res)=>{
    req.body.Subject
    req.body.LastStatus
    req.body.WriteUserName
    req.body.BodyDesc
    req.body.Thumbnail

})
module.exports = router;
