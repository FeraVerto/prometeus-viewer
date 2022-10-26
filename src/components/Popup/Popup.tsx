/** библиотеки */
import React from 'react';
import cn from 'classnames';
import { RemoveScroll } from 'react-remove-scroll';

/** стили */
import './Popup.css';

/**
 * Всплывающее окно
 * @param {string} className
 * @param {Function} onClose событие при закрытии
 * @param {JSX.Element} children дочерние элементы всплывающего окна
 * @param {boolean} isScrollRemoved флаг, отвечающий за удаление скроллбара (по дефолту true)
 */

type PopupType = {
  className?: string;
  onClose:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  children: JSX.Element;
  isScrollRemoved?: boolean;
};

const Popup = ({
  className,
  onClose,
  children,
  isScrollRemoved = true,
}: PopupType) => {
  const popupContent = (
    <div className="popup-wrapper" onClick={onClose}>
      <div
        className={cn('popup', className)}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return isScrollRemoved ? (
    <RemoveScroll>{popupContent}</RemoveScroll>
  ) : (
    <>{popupContent}</>
  );
};

export default Popup;
