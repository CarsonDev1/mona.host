'use client'

import * as React from 'react';
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Fade from '@mui/material/Fade';

import './ThemeSwitch.scss';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };


  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  if (!mounted) return (
    <Image
      src="/loading.svg"
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
      className='icon-loading'
    />
  )

  return (
    <button className="header-theme" onClick={handleClick('bottom-start')}>
        {resolvedTheme === 'dark' ? <FiMoon className="w-[2.4rem] h-[2.4rem]"  /> : <FiSun className="w-[2.4rem] h-[2.4rem]"  />}
      {/* <button aria-describedby={id} type="button" >
      </button> */}

      <Popper id={id} open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              <div className={`theme-list ${resolvedTheme}`}>
                <div className="theme-item" onClick={() => setTheme('light')}>Light</div>
                <div className="theme-item" onClick={() => setTheme('dark')}>Dark</div>
                <div className="theme-item" onClick={() => setTheme('system')}>System</div>
              </div>
            </Box>
          </Fade>
        )}
      </Popper>
    </button>
  )

  if (resolvedTheme === 'dark') {
    return (
      <div className="div">
        <FiMoon className="w-[2.4rem] h-[2.4rem]" onClick={() => setTheme('light')} />
        <ul className="mui-dropdown__menu">
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
          <li><a href="#">Option 4</a></li>
        </ul>
      </div>
    )

  }

  if (resolvedTheme === 'light') {
    return (
      <div className="div">
        <FiSun className="w=[2.4rem] " onClick={() => setTheme('dark')} />
        <ul className="mui-dropdown__menu">
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
          <li><a href="#">Option 4</a></li>
        </ul>
      </div>
    )
  }

}