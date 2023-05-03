import { Styled as S } from './Modal.styles';
import ReactDOM from 'react-dom';

export type ModalProps = {
  closeModal: () => void;
  children: JSX.Element | JSX.Element[];
};

export function Modal({ closeModal, children }: ModalProps) {
  return ReactDOM.createPortal(
    <>
      <S.ModalBackdrop onClick={closeModal}></S.ModalBackdrop>
      <S.Modal className={'modal'}>
        {children}
        <S.ModalCloseButton onClick={closeModal}>X</S.ModalCloseButton>
      </S.Modal>
    </>,
    document.querySelector('body') as HTMLBodyElement,
  );
}
