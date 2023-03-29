'use client'
import {Flex, Heading} from '@chakra-ui/react'
import MainSection from '../component/MainSection/MainSection'
import MainMenu from '../component/ui/MainMenu'

export default function Home() {
  const pageInfos = [
    {
      title: 'Model Y',
      image: '/images/model-y.webp',
      subtitle: 'Réservez votre essai',
      subtitleLink: '#',
      btnL: 'Découvrir nos véhicules disponibles',
      bntLlink: '#',
      btnR: 'Configuration personnalisée',
      btnRlink: '#',
      lastSubtitle: 'En savoir plus sur Tesla for Business',
      lastSubtitleLink: '#',
    },
    {
      title: 'Model 3',
      image: '/images/model-3.webp',
      subtitle: 'Réservez votre essai',
      subtitleLink: '#',
      btnL: 'Découvrir nos véhicules disponibles',
      bntLlink: '#',
      btnR: 'Configuration personnalisée',
      btnRlink: '#',
      lastSubtitle: 'En savoir plus sur Tesla for Business',
      lastSubtitleLink: '#',
    },
    {
      title: 'Model S',
      image: '/images/model-s.webp',
      subtitle: 'Réservez votre essai',
      subtitleLink: '#',
      btnL: 'Configuration personnalisée',
      bntLlink: '#',
      btnR: 'En savoir plus',
      btnRlink: '#',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      title: 'Model X',
      image: '/images/model-x.webp',
      subtitle: '',
      subtitleLink: '',
      btnL: 'Configuration personnalisée',
      bntLlink: '#',
      btnR: 'En savoir plus',
      btnRlink: '#',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      title: "Systèmes d'énergie solaire et Powerwalls",
      image: '/images/powerwall.jpeg',
      subtitle: 'De l’énergie pour tous vos besoins',
      subtitleLink: '',
      btnL: 'En savoir plus',
      bntLlink: '#',
      btnR: '',
      btnRlink: '',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
    {
      title: 'Accessoires',
      image: '/images/charge.jpeg',
      subtitle: '',
      subtitleLink: '',
      btnL: 'Commander maintenant',
      bntLlink: '#',
      btnR: '',
      btnRlink: '',
      lastSubtitle: '',
      lastSubtitleLink: '',
    },
  ]
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection="column"
    >
      <MainMenu />
      {pageInfos?.map((e, index) => (
        <MainSection key={index} pageInfos={pageInfos[index]} />
      ))}
    </Flex>
  )
}
