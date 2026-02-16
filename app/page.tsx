"use client"
import HeroSlider from '@/components/HeroSection'
import InvestmentPhilosophy from '@/components/InvestmentPhilosophy'
import WhatWeDo from '@/components/WhatWeDo'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSlider />
      <WhatWeDo />
      <InvestmentPhilosophy/>
    </div>
  )
}

export default page