import React from 'react'
import './Link.sass'

export default function Link({to, children}) {
  return (
    <a className="link" href={to}>
      {children}
    </a>
  )
}
