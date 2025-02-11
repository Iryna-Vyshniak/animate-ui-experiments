import { IPlanet } from '@/types/planet';
import PhysicalPropertyItem from '../PhysicalPropertyItem';

type PlanetPropertiesProps = {
  physicalProperties: IPlanet['physicalProperties'];
};

const PlanetProperties = ({ physicalProperties }: PlanetPropertiesProps) => (
  <section
    className='w-full md:w-1/3 flex flex-col gap-2 items-center md:items-end md:justify-center mt-16 md:mt-0'
    aria-label='Physical properties'
  >
    <ul className='grid grid-cols-2 gap-2 auto-rows-[1fr]'>
      <li className='flex'>
        <PhysicalPropertyItem title='Diameter (km)' value={physicalProperties.diameterKm} />
      </li>
      <li className='flex'>
        <PhysicalPropertyItem title='Gravity (m/s²)' value={physicalProperties.surfaceGravityMs2} />
      </li>
      <li className='flex'>
        <PhysicalPropertyItem title='Temperature (°C)' value={physicalProperties.avgTemperatureC} />
      </li>
      <li className='flex'>
        <PhysicalPropertyItem
          title='Orbital Period (days)'
          value={physicalProperties.orbitalPeriodDays}
        />
      </li>
    </ul>
  </section>
);

export default PlanetProperties;
