import { FC } from 'react';
import styles from './AppHeader.module.scss';
import { ToggleMainMenuButton } from './ToggleMainMenuButton';

export const AppHeader: FC = () => {
  return (
    <header className={styles.wrap}>
      <ToggleMainMenuButton />
    </header>
  );
};
