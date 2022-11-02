import { appSlice } from '@store/app';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

export const useApp = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const resize = () => {
      const { width } = document.body.getBoundingClientRect();

      let isLeftMenuMobileVariant = true;
      let isShowMainMenu = true;

      if (width <= 768) {
        isLeftMenuMobileVariant = true;
        isShowMainMenu = false;
      } else {
        isLeftMenuMobileVariant = false;
        isShowMainMenu = true;
      }
      dispatch(
        appSlice.actions.setIsLeftMenuMobileVariant(isLeftMenuMobileVariant),
      );

      dispatch(appSlice.actions.setIsShowMainMenu(isShowMainMenu));
    };
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const isShowMainMenu = useAppSelector(appSlice.selectors.getIsShowMainMenu);
  const isLeftMenuMobileVariant = useAppSelector(
    appSlice.selectors.getIsLeftMenuMobileVariant,
  );

  useEffect(() => {
    if (isShowMainMenu && isLeftMenuMobileVariant) {
      document.body.classList.add('body-overflow-hidden');
    } else {
      document.body.classList.remove('body-overflow-hidden');
    }
  }, [isShowMainMenu, isLeftMenuMobileVariant]);
};
