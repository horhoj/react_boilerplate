import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { appSlice } from '@store/app';
import { AppNavCore } from './AppNavCore';
import styles from './AppNav.module.scss';

const Portal: FC = ({ children }) => createPortal(children, document.body);

export const AppNav: FC = () => {
  const dispatch = useAppDispatch();

  const handleWrapClk = () => {
    dispatch(appSlice.actions.toggleIsShowMainMenu());
  };

  const isLeftMenuMobileVariant = useAppSelector(
    appSlice.selectors.getIsLeftMenuMobileVariant,
  );

  return isLeftMenuMobileVariant ? (
    <Portal>
      <div className={styles.wrap}>
        <AppNavCore />
        <div onClick={handleWrapClk} className={styles.xxx} />
      </div>
    </Portal>
  ) : (
    <AppNavCore />
  );
};
