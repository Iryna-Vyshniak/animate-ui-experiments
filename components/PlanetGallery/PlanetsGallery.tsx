'use client';

import { IPlanet } from '@/types/planet';
import PlanetCard from './PlanetCard';

const PlanetsGallery = ({ planets }: { planets: IPlanet[] }) => {
  return (
    <ul
      className='mx-auto max-w-3xl grid gap-3 grid-cols-1 md:grid-cols-2 p-4'
      aria-label='Planets Gallery'
    >
      {planets.map((planet) => (
        <li key={planet.name} className='p-4 rounded-full'>
          <PlanetCard planet={planet} />
        </li>
      ))}
    </ul>
  );
};

export default PlanetsGallery;
