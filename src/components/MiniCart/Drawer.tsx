import { useState } from "react"

interface Props {
	isOpen: boolean
	children: React.ReactNode
	onCartIconClick: () => void
}

const Drawer = ({ children, onCartIconClick }: Props) => {
	return (
		<div className='cart-mini fixed z-50 top-0 right-0 bottom-0'>
      {children}

      <div className="cart-mini-overlay fixed inset-0 bg-black-20 -z-10"></div>
    </div>
	)
}

export default Drawer
