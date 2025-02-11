'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IPlanet } from '@/types/planet';
import PlanetImage from './PlanetImage';
import PlanetHeader from './PlanetHeader';
import PlanetDescription from './PlanetDescription';
import PlanetProperties from './PlanetProperties';
import { useLayoutNavigationController } from '@/hooks/useLayoutNavigationController';

const PlanetDetail = ({ planet }: { planet: IPlanet }) => {
  const { shouldClose, close } = useLayoutNavigationController();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseOffset({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.article
      className='w-full min-h-screen flex flex-col items-center relative p-4'
      layoutId={`planet-${planet.name}`}
    >
      <PlanetImage planet={planet} mouseOffset={mouseOffset} onClose={close} />
      <div className='flex flex-col z-10 w-full h-full p-4 absolute bottom-0 inset-0 bg-gradient-to-b from-transparent to-black opacity-100 transition-all duration-350 justify-center'>
        <div className='w-full h-80' />
        <PlanetHeader name={planet.name} shouldClose={shouldClose} onClose={close} />
        <main className='flex flex-col gap-4 md:flex-row justify-between items-center px-3'>
          <PlanetDescription description={planet.description} />
          <PlanetProperties physicalProperties={planet.physicalProperties} />
        </main>
      </div>
    </motion.article>
  );
};

export default PlanetDetail;
