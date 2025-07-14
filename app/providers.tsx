'use client';
 
import type { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { hardhat } from 'wagmi/chains';
 
export function Providers(props: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY} 
      chain={hardhat}
    >
      {props.children}
    </OnchainKitProvider>
  );
}

