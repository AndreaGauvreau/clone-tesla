export const colorsInternCar = [
  {
    color: 'black',
    image: '/images/configurateur/Paint_Black.avif',
    prix: 'De série',
    name: 'Noir',
    description: '',
  },
  {
    color: 'white',
    image: '/images/configurateur/Paint_White.avif',
    prix: '1 190 €',
    name: 'Noir et blanc',
    description: '',
  },
]
export const colorsCar = [
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
export const wheelscar = [
  {
    id: 1,
    name: 'Jantes Überturbine 21"',
    prix: 'De série',
    description: 'Autonomie certifiée (WLTP) : 514 km',
    image: '/images/configurateur/wheel.avif',
  },
]
export const imagesRoutes = (model, color, inter) => [
  {
    id: 0,
    image: `/images/configurateur/${model}/${color}/front.jpeg`,
  },
  {
    id: 1,
    image: `/images/configurateur/${model}/${color}/back.jpeg`,
  },
  {
    id: 2,
    image: `/images/configurateur/${model}/${color}/side.jpeg`,
  },
  {
    id: 3,
    image: `/images/configurateur/${model}/${color}/wheel.jpeg`,
  },
  {id: 4, image: `/images/configurateur/interieur-${inter}.jpeg`},
]
