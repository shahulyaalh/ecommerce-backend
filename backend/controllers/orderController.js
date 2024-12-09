const orderModel = require('../models/orderModel')
const ProductModel = require('../models/productModel')

exports.createOrder = async(req,res,next) => {
    console.log(req.body,'Data'); 
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,items)=>(acc + items.product.price * items.qty),0)).toFixed(2);
    // console.log(amount,'amount');
    const status = 'pending';
    
    
   const order = await orderModel.create({cartItems,amount,status})

   cartItems.forEach(async(item) => {
    const product = await ProductModel.findById(item.product._id);
    product.stock = product.stock - item.qty;
    await product.save();
    
   });



    res.json({
        "success" : true,
        order
    })
}