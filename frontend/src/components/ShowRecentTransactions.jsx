import React, { useState, useEffect } from 'react'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import publicRequest from './../requestMethods'

const ShowRecentTransactions = () => {
  const [recentTransactions, setRecentTransactions] = useState([])
  const [editingTransactionId, setEditingTransactionId] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [updatedDescription, setUpdatedDescription] = useState('')
  const [updatedAmount, setUpdatedAmount] = useState(0)
  const [updatedTransactionType, setUpdatedTransactionType] = useState('')
  const [date, setDate] = useState('')

  const handleUpdatedDescription = e => {
    setUpdatedDescription(e.target.value)
  }
  const handleUpdatedAmount = e => {
    setUpdatedAmount(parseFloat(e.target.value))
  }
  const handleUpdatedTransactionType = e => {
    setUpdatedTransactionType(e.target.value)
  }
  const handleDate = e => {
    setDate(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicRequest.get('/expenses')
        setRecentTransactions(res.data)
      } catch (error) {
        console.error('Error fetching recent transactions:', error)
      }
    }
    fetchData()
  }, [recentTransactions])

  const handleDelete = async id => {
    try {
      await publicRequest.delete(`/expenses/${id}`)
      setRecentTransactions(recentTransactions.filter(item => item._id !== id))
    } catch (error) {
      console.error('Error deleting transaction:', error)
    }
  }

  const handleEdit = transaction => {
    setEditingTransactionId(transaction._id)
    setUpdatedDescription(transaction.description)
    setUpdatedAmount(transaction.amount)
    setUpdatedTransactionType(transaction.transactionType)
    setDate(transaction.date)
    setToggle(!toggle)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await publicRequest.put(`/expenses/${editingTransactionId}`, {
        description: updatedDescription,
        amount: updatedAmount,
        transactionType: updatedTransactionType,
        date
      })
      setEditingTransactionId(null)
      const res = await publicRequest.get('/expenses')
      setRecentTransactions(res.data)
    } catch (error) {
      console.error('Error updating transaction:', error)
    }
  }

  return (
    <div className='flex flex-col gap-3 px-4 sm:px-8 py-6 rounded-xl bg-white shadow-lg'>
      <h2 className='font-semibold px-3 text-gray-700 text-[16px] text-base sm:text-lg'>
        Recent Transactions
      </h2>
      {recentTransactions.map(item => (
        <div
          key={item._id}
          className='flex flex-col gap-3 bg-gray-100 px-3 sm:px-5 py-3 rounded-lg border border-gray-300 shadow-sm'
        >
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h3 className='font-medium text-gray-800'>{item.description}</h3>
              <h4 className='text-xs text-gray-600'>
                {new Date(item.date).toLocaleDateString()}
              </h4>
            </div>
            <div className='flex gap-1 sm:gap-4'>
              {item.transactionType === 'debit' ? (
                <h3 className='font-semibold text-lg text-red-500'>
                  -₹{item.amount}
                </h3>
              ) : (
                <h3 className='font-semibold text-lg text-green-500'>
                  +₹{item.amount}
                </h3>
              )}
              <button onClick={() => handleEdit(item)}>
                <MdEdit className='border-2 h-6 w-6 p-1 rounded-md text-blue-500' />
              </button>
              <button onClick={() => handleDelete(item._id)}>
                <MdDelete className='border-2 h-6 w-6 p-1 rounded-md text-red-500' />
              </button>
            </div>
          </div>
          {editingTransactionId === item._id && (
            <form
              className='py-4 px-8 flex flex-col gap-4 bg-white rounded-xl shadow-2xl'
              onSubmit={handleSubmit}
            >
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='description'
                  className='text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <input
                  className='px-2 py-1 outline-none rounded-md text-md border border-gray-300'
                  type='text'
                  value={updatedDescription}
                  onChange={handleUpdatedDescription}
                  required
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='amount'
                  className='text-sm font-medium text-gray-700'
                >
                  Amount
                </label>
                <input
                  className='px-2 py-1 outline-none rounded-md text-md border border-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                  type='number'
                  value={updatedAmount}
                  onChange={handleUpdatedAmount}
                  step='0.01'
                  required
                />
              </div>
              <div className='flex gap-4'>
                <div className='flex gap-1 justify-center items-center'>
                  <input
                    className='scale-105 outline-none rounded-md text-md'
                    type='radio'
                    name='transactionType'
                    value='debit'
                    checked={updatedTransactionType === 'debit'}
                    onChange={handleUpdatedTransactionType}
                    required
                  />
                  <label
                    htmlFor='transactionType'
                    className='text-sm font-medium text-gray-700'
                  >
                    Debit
                  </label>
                </div>
                <div className='flex gap-1 justify-center items-center'>
                  <input
                    className='scale-105 outline-none rounded-md text-md'
                    type='radio'
                    name='transactionType'
                    value='credit'
                    checked={updatedTransactionType === 'credit'}
                    onChange={handleUpdatedTransactionType}
                    required
                  />
                  <label
                    htmlFor='transactionType'
                    className='text-sm font-medium text-gray-700'
                  >
                    Credit
                  </label>
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='date'
                  className='text-sm font-medium text-gray-700'
                >
                  Date
                </label>
                <input
                  className='px-2 py-1 outline-none rounded-md text-md border border-gray-300'
                  type='date'
                  value={date}
                  onChange={handleDate}
                  required
                />
              </div>
              <button
                type='submit'
                className='bg-gray-800 rounded-md py-2 text-white my-2 font-title hover:bg-gray-900 transition duration-200'
              >
                Update Transaction
              </button>
            </form>
          )}
        </div>
      ))}
    </div>
  )
}

export default ShowRecentTransactions
