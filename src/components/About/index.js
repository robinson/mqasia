import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about">
    <div className="w-full h-full">
      <StaticImage src="../../images/about/top-border.png" alt="" className="w-full" />
      <div className="bg-[#222] py-4 md:py-0">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <div className="max-w-screen-lg w-full grid px-4 sm:grid-cols-2 gap-8 mx-auto text-white">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <StaticImage src="../../images/about/reservierung.png" alt="The owners of Quang Minh Asia" className="rounded drop-shadow-lg" />
          </motion.div>
          <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <StaticImage src="../../images/about/lieferung.png" alt="online bestellung of Quang Minh Asia" className="rounded drop-shadow-lg" />
          </motion.div>
        </div>

        <motion.div
          className="max-w-screen-md w-full mx-auto text-white px-4"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="py-4">
            We are firm believers in acknowledging and giving credit where it's due. With that, we'd like to let our utmost gratitude be known to those who've helped us along the way:
          </p>
          <p className="text-center">
            City of Boynton Beach (with distinguished praise for the CRA!)
          </p>
          <p className="text-center">
            Catoe & Son Plumbing | Flameguard Fire Equipment | LifeSafety Management
          </p>
          <p className="text-center">
            Chip Brown of AMJ  |  Challenger Operations Inc
          </p>
        </motion.div>

      </div>
      <StaticImage src="../../images/about/btm-border.png" alt="" className="w-full" />
    </div>
  </section>
)

export default About;