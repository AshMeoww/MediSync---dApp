import React from 'react'
import { PatientPR } from '../Sections/PatientPR';
import { PatientAA } from '../Sections/PatientAA';

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
      <PatientPR />
    </div>
  )
}

export function ApprovedModal({isVisible, ApprovedModalbtn }: ApprovedModalParam) {
      if (!isVisible) return null;
  return (
    <div className='h-full p-10'>
      <PatientAA />
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



