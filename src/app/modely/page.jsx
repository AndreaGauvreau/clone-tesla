'use client'
import MainMenu from '@/component/ui/MainMenu'
import React from 'react'
import HeaderSection from '/src/component/compModel/headerSection.jsx'
import ImageRevealAndText from '/src/component/compModel/ImageRevealAndText'
import VideoTabs from '/src/component/compModel/videoTabs'
import HeroImage from '/src/component/compModel/heroImage'
import PointInterets from '/src/component/compModel/PointInterets'
import {Flex} from '@chakra-ui/react'
import Carrosserie from '/src/component/compModel/Carrosserie'
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
    cta: {text: 'Commander', link: '/configurateur'},
  }
  const videoSection = {
    title1: 'Une expérience cinématographique',
    desc1: `Un écran tactile 17" avec inclinaison gauche/droite offre
    une résolution de 2 200 x 1 300, des couleurs authentiques
    et une réactivité exceptionnelle pour l'affichage de jeux,
    de films et bien plus encore.`,
    title2: 'Volant Yoke',
    desc2: `Une nouvelle approche audacieuse vous donne une véritable
    connexion avec la Model S, offrant une meilleure sensation
    de maîtrise et une vue dégagée sur votre tableau de bord et
    sur la route. Appuyez sur le frein : la Model S sélectionne
    automatiquement la bonne direction pour commencer votre
    voyage.`,
    title3: 'Environnement parfait',
    desc3: `Les ouïes de ventilation sont dissimulées dans tout
    l'habitacle, tandis que le contrôle de la température
    tri-zone, les sièges ventilés et le système de filtration
    HEPA offrent un environnement idéal.`,
    title4: 'Deuxième rangée redessinée',
    desc4: `De la place pour trois adultes, avec de l'espace
    supplémentaire aux jambes, en hauteur ainsi qu'un accoudoir
    escamotable intégrant un espace de rangement et un système
    de recharge par induction.`,
    title5: "Des jeux équivalents à ceux d'une console",
    desc5: `Jusqu'à 10 téraflops de puissance de calcul, pour des jeux
    embarqués de qualité comparable à ceux des consoles les plus
    récentes. Jouez depuis n'importe quel siège grâce à la
    compatibilité avec les manettes et les casques sans fil.`,
  }
  return (
    <>
      <MainMenu position1="absolute" position2="absolute" />
      <HeaderSection
        subtitle=""
        model="Model Y"
        content={content}
        image={'/images/modely.webp'}
      />
      <HeroImage image={'/images/modelsPage/interieur.webp'} />
      <Flex flexDirection={'column'} py={20} bg={'black'}>
        <ImageRevealAndText
          title={'Restez connecté'}
          paragraph={
            'Un système audio de 960 watts à 22 haut-parleurs avec Réduction active du bruit de la route offre une écoute immersive et un son de qualité studio.'
          }
          inverse={true}
          image={'/images/modelsPage/interieur-2.jpeg'}
        />
        <ImageRevealAndText
          title={'Son immersif'}
          paragraph={
            'Connectez vos appareils instantanément grâce au Bluetooth supportant plusieurs connexions simultanées, ou rechargez rapidement vos appareils en tirant parti de la recharge sans fil et USB-C 36 W.'
          }
          isvideo={true}
          image={
            'https://tesla-cdn.thron.com/delivery/public/video/tesla/7aa04cc1-863e-4ac6-952e-4ea01457bf47/bvlatuR/WEBHD/MS-Interior-Grid-2-Audio-Desktop'
          }
        />
        <ImageRevealAndText
          title={"De l'espace pour tous vos objets"}
          paragraph={
            "Grâce à des coffres avant et arrière ainsi qu'à des sièges rabattables à plat, vous pouvez embarquer vos bagages ou votre vélo sans avoir à retirer une roue."
          }
          inverse={true}
          image={'/images/modelsPage/velo.jpeg'}
        />
      </Flex>
      <VideoTabs
        tabs={videoSection}
        src="https://tesla-cdn.thron.com/delivery/public/video/tesla/9b04a9fb-e4ea-4198-9d3e-7837feccef68/bvlatuR/WEBHD/Model-S-Interior-Carousel-4-Second-Row-Desktop "
      />
      <Flex flexDirection={'column'} py={20} bg={'black'}>
        <ImageRevealAndText
          title={'Des performances continues'}
          paragraph={
            "Jantes et pneus dédiés à la performance, plus larges à l'arrière, maintiennent le véhicule stable et permettent de passer une puissance maximale sur la route."
          }
          inverse={true}
          image={'/images/modelsPage/face-avant.webp'}
        />
        <ImageRevealAndText
          title={'Aérodynamique optimisée'}
          paragraph={
            "Une attention du détail portée sur l'ensemble des lignes extérieures fait de la Model S le véhicule de production le plus aérodynamique au monde"
          }
          image={'/images/modelsPage/face-arriere.webp'}
        />
        <ImageRevealAndText
          title={'Style élégant'}
          paragraph={
            "Une ligne emblématique combinées à d'élégantes proportions modernisées."
          }
          inverse={true}
          image={'/images/modelsPage/roue.webp'}
        />
      </Flex>
      <PointInterets />
      <Carrosserie />
    </>
  )
}
