import { appSlice } from '@store/app';
import { useAppSelector } from '@store/hooks';
import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './AppNav.module.scss';

export const AppNav: FC = () => {
  const isSHowMainMenu = useAppSelector(appSlice.selectors.getIsShowMainMenu);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={isSHowMainMenu}
      nodeRef={ref}
      timeout={300}
      unmountOnExit
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
    >
      <nav className={styles.wrap} ref={ref}>
        <ol>
          <li>12131</li>
          <li>1123123</li>
        </ol>
      </nav>
    </CSSTransition>
  );
};
