import { FC } from 'react';
import styles from './AppHeaderLeftBlock.module.scss';
import { ToggleMainMenuButton } from './ToggleMainMenuButton';

export const AppHeaderLeftBlock: FC = () => {
  return (
    <div className={styles.wrap}>
      <ToggleMainMenuButton />
      <div className={styles.logo}>REACT</div>
    </div>
  );
};
