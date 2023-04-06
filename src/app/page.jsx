'use client'
import {Box, Flex, Heading} from '@chakra-ui/react'
import MainSection from '../component/MainSection/MainSection'
import MainMenu from '../component/ui/MainMenu'

export default function Home() {
  const pageInfos = [
    {
      id: 0,
      title: 'Model Y',
      image: '/images/model-y.webp',
      subtitle: 'Réservez votre essai',
      subtitleLink: '/modely',
      btnL: 'Découvrir nos véhicules disponibles',
      bntLlink: '/modely',
      btnR: 'Configuration personnalisée',
      btnRlink: '/configurateur',
      lastSubtitle: 'En savoir plus sur Tesla for Business',
      lastSubtitleLink: '/configurateur',
    },
    {
      id: 1,
      title: 'Model 3',
      image: '/images/model-3.webp',
      subtitle: 'Réservez votre essai',
      subtitleLink: '/model3',
      btnL: 'Découvrir nos véhicules disponibles',
      bntLlink: '/model3',
      btnR: 'Configuration personnalisée',
      btnRlink: '/configurateur',
      lastSubtitle: 'En savoir plus sur Tesla for Business',
      lastSubtitleLink: '/configurateur',
    },
    {
      id: 2,
      title: 'Model S',
      image: '/images/model-s.webp',
      subtitle: 'Réservez votre essai',
      subtitleLink: '/models',
      btnL: 'Configuration personnalisée',
      bntLlink: '/models',
      btnR: 'En savoir plus',
      btnRlink: '/configurateur',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      id: 3,
      title: 'Model X',
      image: '/images/model-x.webp',
      subtitle: '',
      subtitleLink: '',
      btnL: 'Configuration personnalisée',
      bntLlink: '/modelx',
      btnR: 'En savoir plus',
      btnRlink: '/configurateur',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      id: 4,
      title: "Systèmes d'énergie solaire et Powerwalls",
      image: '/images/powerwall.jpeg',
      subtitle: 'De l’énergie pour tous vos besoins',
      subtitleLink: '',
      btnL: 'En savoir plus',
      bntLlink: '/configurateur',
      btnR: '',
      btnRlink: '',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      id: 5,
      title: 'Accessoires',
      image: '/images/charge.jpeg',
      subtitle: '',
      subtitleLink: '',
      btnL: 'Commander maintenant',
      bntLlink: '/configurateur',
      btnR: '',
      btnRlink: '',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
  ]
  return (
    <Flex
      w={'99vw'}
      h={'100vh'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection="column"
    >
      <MainMenu />
      {pageInfos?.map((e, index) => (
        <MainSection key={index} pageInfos={pageInfos[index]} index={index} />
      ))}
    </Flex>
  )
}
