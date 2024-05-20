'use client';
import React from 'react'

import Link from 'next/link';
import { navLink } from '../app/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useActiveAccount } from 'thirdweb/react';
import { CustomTooltip } from './CustomTooltip';




const Sidebar = () => {

    const pathName = usePathname()
    const activeAccount = useActiveAccount()



  return (
    <div className='fixed top-1/2 bg-black text-white left-6 -translate-y-1/2 rounded-md py-4 px-4 shadow-lg'>
            <ul className='flex flex-col items-center space-y-6 text-4xl'>
                {
                    navLink.map((item, index) => {
                        if(item.name === 'Admin' && !activeAccount) return null;
                        return (
                            <li key={index} className={cn('hover:text-green-500 hover:translate-x-1 hover:-translate-y-1 transition-all', { 'text-yellow-400': pathName === item.path })}>
                                <Link href={item.path}>
                                    <CustomTooltip TooltipText={item.name} >
                                         {item.Icon} 
                                         </CustomTooltip>
                                    
                                </Link>
                        </li>
            )
            })
        }
        </ul>
    </div >
  )
}

export default Sidebar
