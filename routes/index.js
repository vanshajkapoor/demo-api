const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/api',require('./api'));
console.log('Router Loaded');

module.exports=router;