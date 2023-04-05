'use client'
import React, {useEffect, useReducer} from 'react'
import Configurateur from '../../component/configurateur/Configurateur'
import {imagesRoutes, colorsCar} from '../../component/helpers/constantes'

const initialState = {
  selectedCar: 0,
  selectedColor: 0,
  selectedWheels: 0,
  selectedInterColor: 0,
  crochet: false,
  autopilot: false,
  autonome: false,
  recharge: false,
  sliderindex: 0,
  price: 0,
  progressModel: 0,
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
    case 'SET_PRICE':
      return {...state, price: action.payload}
    case 'SET_PROGRESS':
      return {...state, progressModel: action.payload}
    default:
      return state
  }
}
export default function page() {
  const [state, dispatch] = useReducer(carConfigReducer, initialState)

  const model3 = [
    {
      model: 'Model 3',
      autonomie: 491,
      vitesse: 225,
      zerocent: 6.1,
      isperf: false,
      price: '44 990 €',
      pricevalue: 44990,
    },
    {
      model: 'Model 3 Grande Autonomie',
      autonomie: 602,
      vitesse: 233,
      zerocent: 4.4,
      isperf: false,
      price: '52 990 €',
      pricevalue: 52990,
    },
    {
      model: 'Model 3 Performance',
      autonomie: 547,
      vitesse: 261,
      zerocent: 3.3,
      isperf: true,
      price: '59 990 €',
      pricevalue: 59990,
    },
  ]
  const modelRoute =
    state?.selectedCar === 2 ? 'model-y-performance' : 'model-y-basic'
  const colorRoute = colorsCar[state.selectedColor].color

  const listImage = imagesRoutes(
    modelRoute,
    colorRoute,
    state?.selectedInterColor === 1 ? 'blanc' : 'noir',
  )

  useEffect(() => {}, [listImage, state])
  useEffect(() => {
    const newPrice = calculateTotalPrice()
    dispatch({type: 'SET_PRICE', payload: newPrice})
  }, [
    state.selectedCar,
    state.selectedColor,
    state.selectedInterColor,
    state.crochet,
    state.autopilot,
    state.autonome,
    state.recharge,
  ])
  const car = model3[state.selectedCar]
  const calculateTotalPrice = () => {
    let totalPrice = model3[state.selectedCar].pricevalue

    if (state.selectedColor === 2) {
      totalPrice += 3000
    } else if (state.selectedColor === 3) {
      totalPrice += 1600
    } else if (state.selectedColor === 4) {
      totalPrice += 3200
    }

    if (state.selectedInterColor === 1) {
      totalPrice += 1190
    }

    if (state.crochet) {
      totalPrice += 1350
    }

    if (state.autopilot) {
      totalPrice += 3800
    }

    if (state.autonome) {
      totalPrice += 7500
    }

    if (state.recharge) {
      totalPrice += 500
    }

    return totalPrice
  }

  return (
    <Configurateur
      car={car}
      model3={model3}
      state={state}
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
      setProgress={progress =>
        dispatch({type: 'SET_PROGRESS', payload: progress})
      }
      listImage={listImage}
    />
  )
}
