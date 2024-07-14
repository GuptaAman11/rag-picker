const {
    placeBook,
    fetchBookById,
    deleteById,
    isAccepted,
    updateMoneyById,
  } = require("../controllers/book");
  const Router = require("express");
  const router = Router();
   
  router.post('/placeBook',placeBook);
  router.get('/fetchBookById/:id',fetchBookById);
  router.delete('/deleteById/:id',deleteById);
  router.put('/isAccepted/:id',isAccepted)
  router.put("/updateMoneyById/:id", updateMoneyById);
  
  module.exports=router;