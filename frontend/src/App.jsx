import React from 'react'
import InputForm from './components/InputForm'
import ShowRecentTransactions from './components/ShowRecentTransactions'
import Calculation from './components/Calculation'

const App = () => {
  return (
    <div className='py-3 bg-slate-100 min-h-screen flex flex-col px-5 sm:px-10 items-center'>
      <h1 className='font-title font-extrabold text-4xl py-5 text-center border-slate-300 border-b-3'>
        <span className='text-[#c36430]'>Expense</span>
        <span className='text-[#211212]'> &lt;</span>
        <span className='text-[#3dad48]'>Tracker/</span>
        <span className='text-[#211212]'>&gt;</span>
      </h1>

      <div className='flex flex-col md:flex-row mt-6 gap-6 h-auto w-full max-w-5xl'>
        <div className='flex flex-col gap-5 w-full max-w-2xl'>
          <div>
            <InputForm />
          </div>
          <div>
            <Calculation />
          </div>
        </div>
        <div className='w-full max-w-2xl'>
          <ShowRecentTransactions />
        </div>
      </div>
    </div>
  )
}

export default App
