import React from 'react'

interface PendingModalParam {
    isPendingVisible: boolean;
    PendingModalbtn: () => void;
}

interface ApprovedModalParam {
    isVisible: boolean;
    ApprovedModalbtn: () => void;
}

interface DeniedModalParam {
    isVisible: boolean;
    DeniedModalbtn: () => void;
}

export function PendingModal({isPendingVisible, PendingModalbtn }: PendingModalParam) {
      if (!isPendingVisible) return null;
  return (
    <div className='h-full p-10'>
      Pending Modal
    </div>
  )
}

export function ApprovedModal({isVisible, ApprovedModalbtn }: ApprovedModalParam) {
      if (!isVisible) return null;
  return (
    <div className='border-2 h-full p-10'>
      Approved Access
    </div>
  )
}

export function DeniedModal({isVisible, DeniedModalbtn }: DeniedModalParam) {
      if (!isVisible) return null;
  return (
    <div className='border-2 h-full p-10'>
      Denied Request 
    </div>
  )
}



