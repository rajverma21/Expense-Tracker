import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    transactionType: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const Expense = mongoose.model('Expense', expenseSchema)

export default Expense
