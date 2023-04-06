import {motion, useAnimation} from 'framer-motion'
import {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
export const FadeInTop = ({children, delay = 0}) => {
  const squareVariants = {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 100},
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={squareVariants}
      initial="hidden"
      exit="hidden"
      transition={{duration: 0.4, delay: delay}}
      width={'100%'}
      height={'100%'}
      delay={delay}
    >
      {children}
    </motion.div>
  )
}
