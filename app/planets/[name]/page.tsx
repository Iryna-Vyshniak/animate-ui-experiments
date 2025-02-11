import { notFound } from 'next/navigation';
import PlanetDetail from '@/components/Planet/PlanetDetail';
import planetsData from '@/data/planets.json';

const Page = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params;
  const { planets } = planetsData;
  const planet = planets.find((planet) => planet.name === name);
  if (!planet) {
    notFound();
  }

  return (
    <div className='mx-auto max-w-5xl'>
      <PlanetDetail planet={planet} />
    </div>
  );
};

export default Page;
