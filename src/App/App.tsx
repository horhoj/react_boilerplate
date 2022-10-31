import React from 'react';
import styles from './App.module.scss';
import { AppHeader } from './AppHeader';
import { AppMain } from './AppMain';
import { AppNav } from './AppNav';
import { Spinner } from './Spinner';

export const App: React.FC = () => {
  return (
    <>
      <Spinner />
      <div className={styles.wrap}>
        <AppHeader />
        <div className={styles.appCenterWrap}>
          <AppNav />
          <AppMain />
        </div>
      </div>
    </>
  );
};
