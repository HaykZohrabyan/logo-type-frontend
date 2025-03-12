import classes from './modal.module.scss';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import closeSvg from '../../../assets/img/close.svg';

interface ModalProps {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
}

export const Modal = ({ open, children, setIsOpen }: ModalProps) => {

  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [open]);

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${classes.modal_dialog} ${open && classes.modal_show}`}
      >
        <button
          className={classes.modal_close}
          onClick={() => setIsOpen(false)}
        >
          <img src={closeSvg} width="12" height="12" alt=""/>
        </button>
        {children}
      </div>

      {open && createPortal(
        <div
          className={classes.modal_backdrop}
          onClick={() => setIsOpen(false)}
        />,
        document.body
      )}
    </>
  );
};
