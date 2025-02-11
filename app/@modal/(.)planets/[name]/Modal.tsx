'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import { IPlanet } from '@/types/planet';
import { useLayoutNavigationController } from '@/hooks/useLayoutNavigationController';
import { NAVIGATION_DURATION } from '@/constants/navigation';
import PlanetDetail from '@/components/Planet/PlanetDetail';

const duration = NAVIGATION_DURATION / 1500;

const Modal = ({ planet }: { planet: IPlanet }) => {
  const { isOpen, open, setIsOpen } = useLayoutNavigationController();

  useEffect(() => {
    open();

    return () => {
      setIsOpen(false);
    };
  }, [open, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='w-full h-full z-50 fixed top-0 overflow-y-auto bg-background'>
          <motion.div className='mx-auto p-6 top-10 max-w-5xl' transition={{ duration }}>
            <PlanetDetail planet={planet} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
