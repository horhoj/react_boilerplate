import { FC } from 'react';
import { getRoutePath } from '@router/helpers';
import { AppNavDataLink } from './AppNavDataLink';
import styles from './AppNavData.module.scss';

export const AppNavData: FC = () => {
  return (
    <nav className={styles.wrap}>
      <ul className={styles.ul}>
        <li>
          <AppNavDataLink link={getRoutePath('main')} text={'Main'} />
        </li>
        <li>
          <AppNavDataLink link={getRoutePath('about')} text={'About'} />
        </li>
        <li>
          <AppNavDataLink
            text={'Exit'}
            onClick={() => {
              alert('click on Exit');
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
