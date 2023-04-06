'use client'
import MainMenu from '@/component/ui/MainMenu'
import React from 'react'
import HeaderSection from '/src/component/compModel/headerSection.jsx'

export default function Page() {
  const content = {
    branch1: {i1: '600', i2: 'km', i3: 'Autonomie', i4: '(WLTP)'},
    branch2: {i1: '2,1', i2: 's', i3: '0 à 100 km/h*'},
    branch3: {i1: '322', i2: 'km/h', i3: 'Vitesse maximale†'},
    branch4: {
      i1: '1020',
      i2: 'ch',
      i3: '‡Puissance du véhicule',
      mobile: false,
    },
    cta: {text: 'Commander', link: '/commander'},
  }

  return (
    <>
      <MainMenu />
      <HeaderSection subtitle="Plaid" model="Model S" content={content} />
    </>
  )
}
