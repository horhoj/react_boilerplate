import { appSlice } from '@store/app';
import { useAppDispatch } from '@store/hooks';
import { useEffect } from 'react';

export const useApp = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const resize = () => {
      const { width } = document.body.getBoundingClientRect();
      console.log(width);

      let isLeftMenuMobileVariant = true;
      if (width <= 768) {
        isLeftMenuMobileVariant = true;
      } else {
        isLeftMenuMobileVariant = false;
      }
      dispatch(
        appSlice.actions.setIsLeftMenuMobileVariant(isLeftMenuMobileVariant),
      );
    };
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
};
