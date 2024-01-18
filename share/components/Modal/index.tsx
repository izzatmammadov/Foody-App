// Modal.tsx
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto ${
        isOpen ? 'block' : 'hidden'
      } bg-black bg-opacity-30`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
