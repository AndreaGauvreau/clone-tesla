'use client'
import React, {useReducer, useState} from 'react'
import Configurateur from '../../component/configurateur/Configurateur'

const initialState = {
  selectedCar: 0,
  selectedColor: 1,
  selectedWheels: 0,
  selectedInterColor: null,
  crochet: false,
  autopilot: false,
  autonome: false,
  recharge: false,
  sliderindex: 0,
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
    case 'SET_SELECTED_SLIDER_INDEX':
      return {...state, sliderindex: action.payload}
    default:
      return state
  }
}
export default function page() {
  const [state, dispatch] = useReducer(carConfigReducer, initialState)

  const colorsCar = [
    {
      color: 'white',
      image: '/images/configurateur/Paint_White.avif',
      prix: 'De série',
      name: 'Blanc Nacré Multicouches',
      description: '',
    },
    {
      color: 'black',
      image: '/images/configurateur/Paint_Black.avif',
      prix: 'De série',
      name: 'Noir Uni',
      description: '',
    },
    {
      color: 'grey',
      image: '/images/configurateur/Paint_MidnightSilver.avif',
      prix: '3 000 €',
      name: 'Quicksilver',
      description:
        'Développées à la Gigafactory de Berlin. Uniquement disponibles en Europe et au Moyen-Orient.',
    },
    {
      color: 'blue',
      image: '/images/configurateur/Paint_Blue.avif',
      prix: '1 600 €',
      name: 'Bleu Outremer Métallisé',
      description: '',
    },
    {
      color: 'red',
      image: '/images/configurateur/Paint_Red.avif',
      prix: '3 200 €',
      name: 'Midnight Cherry Red',
      description:
        'Développées à la Gigafactory de Berlin. Uniquement disponibles en Europe et au Moyen-Orient.',
    },
  ]
  const wheelscar = [
    {
      id: 1,
      name: 'Jantes Überturbine 21"',
      prix: 'De série',
      description: 'Autonomie certifiée (WLTP) : 514 km',
      image: '/images/configurateur/wheel.avif',
    },
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

  const listImage = [
    {id: 0, image: '/images/configurateur/back.jpeg'},
    {id: 1, image: '/images/configurateur/front.jpeg'},
    {id: 2, image: '/images/configurateur/side.jpeg'},
    {id: 3, image: '/images/configurateur/wheel.jpeg'},
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
      setSliderIndex={index =>
        dispatch({type: 'SET_SELECTED_SLIDER_INDEX', payload: index})
      }
      wheelscar={wheelscar}
      listImage={listImage}
    />
  )
}
