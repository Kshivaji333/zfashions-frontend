import { type ComponentType } from 'react'
import { motion } from 'framer-motion'

type MotionElement = ComponentType<Record<string, unknown>>

const MotionDiv = motion.div as MotionElement
const MotionH1 = motion.h1 as MotionElement
const MotionP = motion.p as MotionElement

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function RegisterHero() {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="hidden lg:flex lg:w-1/2 bg-luxury-charcoal relative overflow-hidden min-h-screen" 
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold rounded-full  blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold rounded-full  blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center px-16 text-white">
        <MotionH1
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display text-7xl mb-6 leading-tight"
        >
          Discover
          <br />
          <span className="text-luxury-gold">Timeless</span>
          <br />
          Elegance
        </MotionH1>

        <MotionP
          {...fadeUp}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-sans text-lg text-gray-300 max-w-md leading-relaxed"
        >
          Where luxury meets craftsmanship. Join our exclusive community and
          experience fashion that transcends trends.
        </MotionP>

        <MotionDiv
          {...fadeUp}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex items-center space-x-8"
        >
          <div className="text-center">
            <div className="text-4xl font-display text-luxury-gold">500+</div>
            <div className="text-sm text-gray-400 mt-1">Premium Pieces</div>
          </div>
          <div className="w-px h-16 bg-gray-700"></div>
          <div className="text-center">
            <div className="text-4xl font-display text-luxury-gold">10K+</div>
            <div className="text-sm text-gray-400 mt-1">Happy Clients</div>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}

export default RegisterHero
