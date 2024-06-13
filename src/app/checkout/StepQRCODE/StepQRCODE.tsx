import * as React from 'react';
import { Transition } from 'react-transition-group';
// import Modal from '@mui/joy/Modal';
// import ModalDialog from '@mui/joy/ModalDialog';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Image from "next/image";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth: 'calc(100% - 32px)',
  bgcolor: 'background.paper',
  borderRadius: 4,
  p: 4,
  OutlinedInput: 0,
};

interface Props {
  isOpen: boolean
	onCloseQrClick: () => void
}

function StepQRCODE({ isOpen, onCloseQrClick }: Props) {
  const [open, setOpen] = React.useState<boolean>(true);
  return ( 
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onCloseQrClick}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <div className="qr-pop">
              <div className="box">
                <Image src='/cart/qr-code.png' width={540} height={640} alt="qr code" />

                <div className="cart-payment-btn w-full mt-4 p-1 rounded-[calc(var(--btn-border-radius)+4px)] bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                  <button type='button' className='w-full *:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-600 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-600 hover:bg-primary-600 active:bg-primary-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-600 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative'>
                    <span onClick={onCloseQrClick} className="text-nowrap">Hoàn tất giao dịch</span>
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    // <Transition in={openQr} timeout={400}>
    //   {(state: string) => (
    //       <Modal
    //         keepMounted
    //         // open={!['exited', 'exiting'].includes(state)}
    //         open={openQr}
    //         onClose={() => setOpen(false)}
    //         slotProps={{
    //           // backdrop: {
    //           //   sx: {
    //           //     opacity: 0,
    //           //     backdropFilter: 'none',
    //           //     transition: `opacity 400ms, backdrop-filter 400ms`,
    //           //     ...{
    //           //       entering: { opacity: 1, backdropFilter: 'blur(8px)' },
    //           //       entered: { opacity: 1, backdropFilter: 'blur(8px)' },
    //           //     }[state],
    //           //   },
    //           // },
    //         }}
    //         sx={{
    //           visibility: state === 'exited' ? 'hidden' : 'visible',
    //         }}
    //       >
    //         <ModalDialog
    //           sx={{
    //             opacity: 0,
    //             transition: `opacity 300ms`,
    //             ...{
    //               entering: { opacity: 1 },
    //               entered: { opacity: 1 },
    //             }[state],
    //           }}
    //         >
    //           <div className="qr-pop">
    //             <div className="box">
    //               <Image src='/cart/qr-code.png' width={540} height={640} alt="qr code" />

    //               <div className="cart-payment-btn w-full mt-4 p-1 rounded-[calc(var(--btn-border-radius)+4px)] bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
    //                 <button type='button' className='w-full *:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-600 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-600 hover:bg-primary-600 active:bg-primary-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-600 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative'>
    //                   <span onClick={() => {setOpen(false)}} className="text-nowrap">Hoàn tất giao dịch</span>
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </ModalDialog>
    //       </Modal>
    //     )}
    // </Transition>
  );
}

export default StepQRCODE;