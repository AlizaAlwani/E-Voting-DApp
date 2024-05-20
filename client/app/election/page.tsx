import { ElectionFormDialog } from '@/components/ElectionFormDialog'
import React from 'react'
import { BiPlus } from 'react-icons/bi'

const ElectionsPage = () => {
  return (
    <div className='bg-zinc-50 h-screen pt-28 px-28'>
      <div className='grid grid-cols-4 gap-5 '>
        <ElectionFormDialog>
        <div className='h-[200px] border border-slate-300 rounded-[8px] cursor-pointer shadow-md hover:bg-slate-100 transition-all hover:-translate-y-[0.1rem] flex items-center justify-center'>
          <BiPlus size={100}></BiPlus>
        </div>
        </ElectionFormDialog>
        <div className='h-[200px] border border-slate-300 rounded-[8px] cursor-pointer shadow-md hover:bg-slate-100 transition-all hover:-translate-y-[0.1rem]'></div>
        <div className='h-[200px] border border-slate-300 rounded-[8px] cursor-pointer shadow-md hover:bg-slate-100 transition-all hover:-translate-y-[0.1rem]'></div>
        <div className='h-[200px] border border-slate-300 rounded-[8px] cursor-pointer shadow-md hover:bg-slate-100 transition-all hover:-translate-y-[0.1rem]'></div>
        <div className='h-[200px] border border-slate-300 rounded-[8px] cursor-pointer shadow-md hover:bg-slate-100 transition-all hover:-translate-y-[0.1rem]'></div>
        <div className='h-[200px] border border-slate-300 rounded-[8px] cursor-pointer shadow-md hover:bg-slate-100 transition-all hover:-translate-y-[0.1rem]'></div>
      </div>
    </div>
  )
}

export default ElectionsPage
