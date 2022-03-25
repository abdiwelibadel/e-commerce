import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) {
  const { method, query:{id} } = req;

  dbConnect()

  if(method === "GET"){
   try{
    const product = await Product.findById(id)
    res.status(200).json(product)
   }catch(e){
    return res.status(500).json(e)
   }
  }

  if(method === "POST"){
   try{
     const product = await Product.create(req.body);
     res.status(201).json(product)
   }catch(e){
    return res.status(500).json(e)
   }
  }

  if(method === "PUT"){
   try{
     const product = await Product.findByIdAndUpdate(id, req.body,{
       new: true
     });
     res.status(201).json(product)
   }catch(e){
    return res.status(500).json(e)
   }
  }

  if(method === "DELETE"){
   try{
     await Product.findByIdAndDelete(id);
     res.status(200).json('product have been deleted')
   }catch(e){
    return res.status(500).json(e)
   }
  }
}