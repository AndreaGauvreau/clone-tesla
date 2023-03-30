'use client'
import React, {useReducer, useState} from 'react'
import Configurateur from '../../component/configurateur/Configurateur'

const initialState = {
  selectedCar: 0,
  selectedColor: 1,
  selectedWheels: null,
  selectedInterColor: null,
}

function carConfigReducer(state, action) {
  switch (action.type) {
    case 'SET_SELECTED_CAR':
      return {...state, selectedCar: action.payload}
    case 'SET_SELECTED_COLOR':
      return {...state, selectedColor: action.payload}
    case 'SET_SELECTED_WHEELS':
      return {...state, selectedWheels: action.payload}
    case 'SET_SELECTED_INTER_COLOR':
      return {...state, selectedInterColor: action.payload}
    default:
      return state
  }
}
export default function page() {
  const [state, dispatch] = useReducer(carConfigReducer, initialState)

  const colorsCar = [
    {color: 'white', image: '/images/configurateur/Paint_White.avif'},
    {color: 'black', image: '/images/configurateur/Paint_Black.avif'},
    {color: 'grey', image: '/images/configurateur/Paint_MidnightSilver.avif'},
    {color: 'blue', image: '/images/configurateur/Paint_Blue.avif'},
    {color: 'red', image: '/images/configurateur/Paint_Red.avif'},
  ]

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

  const car = model3[state.selectedCar]
  return (
    <Configurateur
      car={car}
      model3={model3}
      state={state}
      colorsCar={colorsCar}
      setSelectedCar={car => dispatch({type: 'SET_SELECTED_CAR', payload: car})}
      setSelectedColor={color =>
        dispatch({type: 'SET_SELECTED_COLOR', payload: color})
      }
      setSelectedWheel={wheel =>
        dispatch({type: 'SET_SELECTED_WHEELS', payload: wheel})
      }
      setSelectedInternColor={color =>
        dispatch({type: 'SET_SELECTED_INTER_COLOR', payload: color})
      }
    />
  )
}
