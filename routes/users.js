var express = require('express');
var router = express.Router();
const modelUser = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', async (req,res) => {
  try{
    const model = new modelUser(req.body);
    const result = await model.save();
    if(result){
      res.json({
        "status": 200,
        "message": 'Them thanh cong',
        "data": result
      });
    }else{
      res.json({
        "status": 400,
        "message": 'Them that bai',
        "data": []
      });
    }
    // res.send(result);
  }catch(error){
    console.log(error);
  }
});


router.get('/list', async (req,res) =>{
  const result = await modelUser.find({});
  try{
    res.send(result);
  }catch(error){
    console.log(error);
  }
});

router.get('/getbyid/:id', async(req,res) => {
  try{
    const result = await modelUser.findById(req.params.id);
    if(result){
      res.send(result);
    }
    else{
      res.json({
        "status": 400,
        "message": 'Không tìm thấy id',
        "data": []
      });
    }
  }catch(error){
    if(error.name === 'CasrError'){
      res.status(404).send('ID Không đúng định dạng');
    }
    else{
      console.log(error);
      res.status(500).send('Không tìm thấy id phù hợp');
    } 

  }
});

router.patch('/edit/:id', async(req,res) => {
  try{
    const result = await modelUser.findByIdAndUpdate(req.params.id,req.body);
    if(result){
      const rs = await  result.save(); 
      res.send(rs);
    }
    else{
      res.json({
        "status": 400,
        "message": 'Không tìm thấy id',
        "data": []
      });
    }
  }catch(error){
    if(error.name === 'CasrError'){
      res.status(404).send('ID Không đúng định dạng');
    }
    else{
      console.log(error);
      res.status(500).send('Update không thành công !!');
    } 

  }
});

router.delete('/delete/:id', async (req,res) => {
  try{
    const result = await modelUser.findByIdAndDelete(req.params.id);
    if(result){
      res.json({
        "status": 200,
        "message": 'Xoá thành công !!',
        "data": result
      });
    }
    else{
      res.json({
        "status": 400,
        "message": 'Xoá không thành công !!',
        "data": []
      });
    }
  }catch(error){
    if(error.name === 'CasrError'){
      res.status(404).send('ID Không đúng định dạng');
    }
    else{
      console.log(error);
      res.status(500).send('Xoá không thành công !!');
    } 

  }
});

module.exports = router;
