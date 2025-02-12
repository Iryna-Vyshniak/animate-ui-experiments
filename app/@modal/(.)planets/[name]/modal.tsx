'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import { IPlanet } from '@/types/planet';
import { useLayoutNavigationController } from '@/hooks/useLayoutNavigationController';
import { NAVIGATION_DURATION } from '@/constants/navigation';
import PlanetDetail from '@/components/Planet/PlanetDetail';

const duration = NAVIGATION_DURATION / 1000;
// Navigation_duration => 350 = example: 350 means that the duration of animation 350 milliseconds (MS). Division by 1000 converts it into seconds (0.35 sec).

const Modal = ({ planet }: { planet: IPlanet }) => {
  const { isOpen, open, setIsOpen } = useLayoutNavigationController();

  useEffect(() => {
    open();

    return () => {
      setIsOpen(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='modal w-screen h-screen z-50 fixed top-0'>
          <motion.div className='mx-auto max-w-5xl' transition={{ duration }}>
            <PlanetDetail planet={planet} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
