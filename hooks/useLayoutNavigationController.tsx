import { useRouter } from 'next/navigation';
import { NAVIGATION_DURATION } from '@/constants/navigation';
import { useLayoutNavigationStore } from '@/store/layoutNavigationStore';

export const useLayoutNavigationController = () => {
  const router = useRouter();
  const { isOpen, setIsOpen, setShouldClose, shouldClose } = useLayoutNavigationStore();

  const push = (name: string) => {
    router.push(`/planets/${name}`);
  };

  const open = () => {
    setIsOpen(true);
    setShouldClose(true);
  };

  const close = () => {
    if (shouldClose) {
      setIsOpen(false);
      setTimeout(() => {
        router.back();
      }, NAVIGATION_DURATION);
    }
  };

  return { isOpen, open, close, push, setIsOpen, shouldClose };
};
