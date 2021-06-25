import React from 'react';
import './Text.sass';

export default function Text({ className, children }) {
  return <p className={`text ${className || ''}`}>{children}</p>;
}
