import React from 'react';
import './Container.sass';

export default function Container({ children }) {
  return <div className='container'>{children}</div>;
}
