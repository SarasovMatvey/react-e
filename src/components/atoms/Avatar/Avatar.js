import React from 'react';
import './Avatar.sass';

export default function Avatar({ img }) {
  return (
    <div className='avatar'>
      <img src={img} alt='avatar' />
    </div>
  );
}
