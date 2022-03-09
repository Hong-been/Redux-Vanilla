import React from 'react'

export const Todo = ({text}) => {
  return (
    <li>
      {text} <button>DEL</button>
    </li>
  )
}
