import planetsData from '@/data/planets.json';
import { notFound } from 'next/navigation';
import Modal from './Modal';

const Page = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params;
  const { planets } = planetsData;
  const planet = planets.find((planet) => planet.name === name);
  if (!planet) {
    notFound();
  }

  return <Modal planet={planet} />;
};

export default Page;
