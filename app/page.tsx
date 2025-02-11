import PlanetsGallery from '@/components/PlanetGallery/PlanetsGallery';

import planetsData from '@/data/planets.json';

export default function Home() {
  const { planets } = planetsData;
  return (
    <div className='grid place-items-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 '>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <PlanetsGallery planets={planets} />
      </main>
    </div>
  );
}
