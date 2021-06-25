import React from 'react';
import './Title.sass';

export default function Title({ className, children }) {
  return <h1 className={`title ${className || ''}`}>{children}</h1>;
}
