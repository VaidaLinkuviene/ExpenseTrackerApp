import expenseModel from '../models/ExpenseModel.js'

const getAllExpenses = async (req, res) => {
  try{
    const allExpenses = await expenseModel.find({});
    res.status(200).json(allExpenses)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

const sendExpenses = async (req, res) => {
  try{
    const postExpenses = new expenseModel(req.body);
    const data = await postExpenses.save();
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

const getExpense = async (req, res) => {
  const {id} = req.params;
  try{
    const data = await expenseModel.find({_id:id});
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

const deleteExpense = async (req, res) => {
  const {id} = req.params;
  try{
    const data = await expenseModel.findByIdAndDelete({_id:id});
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

const updateExpense = async (req, res) => {
  const {id} = req.params;
  try{
    const data = await expenseModel.findByIdAndUpdate({_id:id}, {
      $set: req.body,
    });
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

export {getAllExpenses, sendExpenses, getExpense, deleteExpense, updateExpense};

