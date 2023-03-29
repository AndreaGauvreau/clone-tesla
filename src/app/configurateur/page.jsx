'use client'
import React, {useState} from 'react'
import Configurateur from '../../component/configurateur/Configurateur'

export default function page() {
  const [selectedCar, setSelectedCar] = useState(2)
  const model3 = [
    {
      model: 'Model 3',
      autonomie: 491,
      vitesse: 225,
      zerocent: 6.1,
      isperf: false,
      price: '44 990 €',
    },
    {
      model: 'Model 3 Grande Autonomie',
      autonomie: 602,
      vitesse: 233,
      zerocent: 4.4,
      isperf: false,
      price: '52 990 €',
    },
    {
      model: 'Model 3 Performance',
      autonomie: 547,
      vitesse: 261,
      zerocent: 3.3,
      isperf: true,
      price: '59 990 €',
    },
  ]

  const car = model3[selectedCar]
  return (
    <Configurateur
      car={car}
      setSelectedCar={setSelectedCar}
      selectedCar={selectedCar}
      model3={model3}
    />
  )
}
