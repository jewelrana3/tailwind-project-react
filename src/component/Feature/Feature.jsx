import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='text-left flex mt-1'>
             <CheckCircleIcon className="h-6 w-6 text-blue-500" />
            <span className='pl-4'>{feature}</span>
        </div>
    );
};

export default Feature;