import incomesModel from '../models/IncomesModel.js'

const getAllIncomes = async (req, res) => {
  try{
    const allIncomes = await incomesModel.find({});
    res.status(200).json(allIncomes)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

const sendIncomes = async (req, res) => {
  try{
    const postIncomes = new incomesModel(req.body);
    const data = await postIncomes.save();
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

const getIncomes = async (req, res) => {
  const {id} = req.params;
  try{
    const data = await incomesModel.find({_id:id});
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

const deleteIncomes = async (req, res) => {
  const {id} = req.params;
  try{
    const data = await incomesModel.findByIdAndDelete({_id:id});
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

const updateIncomes = async (req, res) => {
  const {id} = req.params;
  try{
    const data = await incomesModel.findByIdAndUpdate({_id:id}, {
      $set: req.body,
    });
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

export {getAllIncomes, sendIncomes, getIncomes, deleteIncomes, updateIncomes};


