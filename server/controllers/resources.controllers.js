const { Resources } = require('../models/resources');
    module.exports = {
      //C
createResources: (req, res) => {
    Resources.create(req.body)
    .then(data => res.json({message:"success",data:data}))
    .catch(err=> res.json({message:'error',data:err}));
},
//R
allResources: (req,res) => {
    Resources.find()
    .then(data => res.json({message:"success",data:data}))
    .catch(err=> res.json({message:'error',data:err}));
},
oneResources: (req,res) => {
    Resources.findOne({ _id: req.params.id })
    .then(data => res.json({message:"success",data:data}))
    .catch(err=> res.json({message:'error',data:err}));
},
//U
updateResources: (req,res) =>{
    Resources.findOneAndUpdate({_id: req.params.id}, req.body , { new:true, runValidators:true })
    .then(data => res.json({message:"success",data:data}))
    .catch(err=> res.json({message:'error',data:err}));
},
//D
DeleteResources: (req,res) => {
    Resources.deleteOne({_id: req.params.id})
    .then(data => res.json({message:"success",data:data}))
    .catch(err=> res.json({message:'error',data:err}));
}
}