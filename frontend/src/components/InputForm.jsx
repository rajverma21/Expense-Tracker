import React, { useState } from 'react'
import publicRequest from './../requestMethods'

const InputForm = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [transactionType, setTransactionType] = useState('')
  const [date, setDate] = useState('')

  const handleDescription = e => {
    setDescription(e.target.value)
  }
  const handleAmount = e => {
    setAmount(parseFloat(e.target.value))
  }
  const handleTransactionType = e => {
    setTransactionType(e.target.value)
  }
  const handleDate = e => {
    setDate(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    publicRequest
      .post('/expenses', {
        description,
        amount,
        transactionType,
        date
      })
      .then(() => {
        console.log('Transaction added')
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className='font-body h-full'>
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
            value={description}
            onChange={handleDescription}
            required
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='amount' className='text-sm font-medium text-gray-700'>
            Amount
          </label>
          <input
            className='px-2 py-1 outline-none rounded-md text-md border border-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            type='number'
            onChange={handleAmount}
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
              onChange={handleTransactionType}
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
              onChange={handleTransactionType}
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
          <label htmlFor='date' className='text-sm font-medium text-gray-700'>
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
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default InputForm
