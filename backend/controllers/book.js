const Book = require('../models/Book');
const placeBook = async (req,res)=>{
    const { bookerName, bookieName, money, userLocation } = req.body;
    const book = new Book({ bookerName, bookieName, money, userLocation });
    try{
        await book.save();
        res.status(201).json({message:'Booked Successfully',book});
    }catch(err){
        res.status(400).json({message:'Book not created',err});
    }
            
            
}
const fetchBookById = async(req,res) =>{
    const {id} = req.params;
    try{
        const book = await Book.findOne({ _id: id });
        res.status(200).json({book});
    }catch(err){
        res.status(400).json({message:'Book not found',err});
    }
        

}

const deleteById =async(req,res)=>{
    const {id} = req.params;
    try {
        const book = await Book.deleteOne({ _id: id });
        res.status(200).json({message:'Book deleted',book})
    } catch (err) {
        res.status(400).json({message:"book is not deleted",err})
    }


}
 
const isAccepted = async(req,res)=>{
    try {
            const { id } = req.params;
            const { isAccepted } = req.body;
            const boolvalue = await Book.findOneAndUpdate( { _id: id },{ isAccepted: isAccepted} );
            res.status(200).json({ message: "Accepted", boolvalue });

    } catch (err) {
                res.status(400).json({ message: "Not Accepted", err });
    }
        
}

const updateMoneyById = async(req,res)=>{
   try {
     const { money } = req.body;
     const { id } = req.params;
     const Umoney = await Book.findOneAndUpdate({ _id: id }, { money: money });
                 res.status(200).json({ message: "Money updated", Umoney });

   } catch (err) {
                    res.status(400).json({ message: " money Not updated", err });

   }



}

module.exports = 
{placeBook,fetchBookById,deleteById,isAccepted,updateMoneyById};