import React from 'react'
import style from './ModalWindow.module.scss'

export const ModalWindow = ({ children, visible, setVisible }) => {

  const rootClasses = [style.modalWindow]

  if (visible) {
    rootClasses.push(style.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={style.modalWindowContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}