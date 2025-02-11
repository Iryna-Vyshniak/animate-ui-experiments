type PlanetHeaderProps = {
  name: string;
  shouldClose: boolean;
  onClose: () => void;
};

const PlanetHeader = ({ name, shouldClose, onClose }: PlanetHeaderProps) => (
  <header className='flex w-full justify-between items-center p-4'>
    <h2 className='font-space-mono text-6xl font-bold'>{name}</h2>
    {shouldClose && (
      <button
        className='rounded bg-white/10 px-2 py-1 font-semibold text-white shadow-sm hover:bg-white/20 font-inter'
        onClick={onClose}
        aria-label='Close planet details'
      >
        Close
      </button>
    )}
  </header>
);

export default PlanetHeader;
