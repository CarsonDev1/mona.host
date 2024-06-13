'use client';

import React, { useState } from 'react';

import StepQRCODE from './StepQRCODE/StepQRCODE';
import StepOne from './StepOne/StepOne';

function Checkout() {
	return (
		<div className='checkout-step'>
			<div className='checkout-step-item step-1'>{/* <StepOne /> */}</div>

			{/* <div className="checkout-step-item step-2">
        <InfoCustomer />
      </div> */}

			{/* <div className="checkout-step-item step-3">
        <StepThree />
      </div> */}

			{/* <div className="checkout-step-item step-4">
        <StepQRCODE />
      </div> */}

			{/* <div className="checkout-step-item step-5">
        <StepFive />
      </div> */}
		</div>
	);
}

export default Checkout;
