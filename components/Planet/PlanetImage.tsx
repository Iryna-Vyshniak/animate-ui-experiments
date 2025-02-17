'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IPlanet } from '@/types/planet';
import Download from '@/public/icons/download.svg';
import { useState } from 'react';

type PlanetImageProps = {
  planet: IPlanet;
  mouseOffset: { x: number; y: number };
};

const PlanetImage = ({ planet, mouseOffset }: PlanetImageProps) => {
  const [isView, setIsView] = useState<boolean>(false);

  const handleView = () => setIsView(!isView);

  return (
    <>
      {' '}
      <a
        href={planet.imageUrl}
        download
        className='absolute z-[60] top-4 right-8 p-2 bg-gradient-to-br from-slate-500/20 to-zinc-300/30 rounded-full shadow-sm hover:shadow-lg backdrop-blur cursor-crosshair active:scale-95 transition-all'
      >
        <Image src={Download} alt='download icon' />
      </a>{' '}
      <figure
        className={`flex items-center justify-center w-[90%]  ${
          !isView ? 'relative' : 'fixed inset-0 z-[70]'
        }`}
      >
        <motion.div
          transition={{ type: 'spring', bounce: 0.5, duration: 5, mass: 1 }}
          className='relative flex items-center justify-center p-8'
          layoutId={`planet-image-${planet.name}`}
        >
          <Image
            src={planet.imageUrl}
            alt={`Image of ${planet.name}`}
            width={500}
            height={500}
            className='scale-[1.5] cursor-pointer'
            onClick={handleView}
            style={{
              transform: `scale(1.2) translate(${-mouseOffset.x}px, ${-mouseOffset.y}px)`,
            }}
          />
        </motion.div>
      </figure>
    </>
  );
};

export default PlanetImage;
