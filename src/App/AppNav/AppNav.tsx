import { FC } from 'react';
import { createPortal } from 'react-dom';
import { AppNavCore } from './AppNavCore';

const Portal: FC = ({ children }) => createPortal(children, document.body);

export const AppNav: FC = () => {
  return (
    <Portal>
      <div>
        <AppNavCore />
      </div>
    </Portal>
  );
};
