import { motion } from 'framer-motion';
import Image from 'next/image';
import { IPlanet } from '@/types/planet';

type PlanetImageProps = {
  planet: IPlanet;
  mouseOffset: { x: number; y: number };
  onClose: () => void;
};

const PlanetImage = ({ planet, mouseOffset, onClose }: PlanetImageProps) => (
  <figure>
    <motion.div
      transition={{ type: 'spring', bounce: 0.1, duration: 5, mass: 0.9 }}
      className='relative aspect-video flex w-full items-center justify-center'
      layoutId={`planet-image-${planet.name}`}
    >
      <Image
        src={planet.imageUrl}
        alt={`Image of ${planet.name}`}
        width={600}
        height={600}
        className='scale-[1.5]'
        onClick={onClose}
        style={{
          transform: `scale(1.5) translate(${-mouseOffset.x}px, ${-mouseOffset.y}px)`,
        }}
      />
    </motion.div>
  </figure>
);

export default PlanetImage;
