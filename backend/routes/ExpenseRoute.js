import express from 'express';
import {getAllExpenses, getExpense, sendExpenses, deleteExpense, updateExpense} from '../controller/ExpenseController.js';
const router = express.Router();

router.get('/', getAllExpenses);
router.get('/:id', getExpense);
router.post('/sendData', sendExpenses);
router.delete("/:id", deleteExpense);
router.put('/:id', updateExpense)

export default router;