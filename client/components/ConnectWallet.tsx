import { chain, client } from '@/lib/thirdweb/index';
import React from 'react'
import { ConnectButton } from "@/providers/ThirdWebProviders";

const ConnectWallet = () => {
  return (
    <div className='fixed top-6 right-6'>
        <ConnectButton client={client} chain={chain} connectButton={{
          style:{
            backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity",
          }

        }}></ConnectButton>
      
    </div>
  )
}


export default ConnectWallet
