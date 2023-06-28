'use client'

import { CustomButtonProps } from '@/types'

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custon-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 px-5`}>{title}</span>
    </button>
  )
}
