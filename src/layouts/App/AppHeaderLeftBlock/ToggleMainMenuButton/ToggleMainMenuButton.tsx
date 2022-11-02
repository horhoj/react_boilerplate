import { appSlice } from '@store/app';
import { useAppDispatch } from '@store/hooks';
import { FC } from 'react';
import styles from './ToggleMainMenuButton.module.scss';

export const ToggleMainMenuButton: FC = () => {
  const dispatch = useAppDispatch();

  const handleToggleBtnClk = () => {
    dispatch(appSlice.actions.toggleIsShowMainMenu());
  };

  return (
    <button className={styles.wrap} onClick={handleToggleBtnClk}>
      <span />
      <span />
      <span />
    </button>
  );
};
