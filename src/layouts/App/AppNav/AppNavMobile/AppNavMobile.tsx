import { AppHeaderLeftBlock } from '@layouts/App/AppHeaderLeftBlock';
import { appSlice } from '@store/app';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { AppNavData } from '../AppNavData';
import styles from './AppNavMobile.module.scss';

const Portal: FC = ({ children }) => createPortal(children, document.body);

export const AppNavMobile: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const isShowMainMenu = useAppSelector(appSlice.selectors.getIsShowMainMenu);

  const handleWrapClk = () => {
    dispatch(appSlice.actions.setIsShowMainMenu(false));
  };

  return (
    <Portal>
      <CSSTransition
        in={isShowMainMenu}
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
        <div className={styles.wrap} ref={ref} onClick={handleWrapClk}>
          <div className={styles.dataWrap} onClick={(e) => e.stopPropagation()}>
            <AppHeaderLeftBlock />
            <AppNavData />
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
