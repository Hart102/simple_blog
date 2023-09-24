import React from 'react'

interface titleInterface {
    title?: string
}

const Title: React.FC<titleInterface> = ({ title }) => {
  return (
    <p className='font-bold uppercase mb-10'>{title}</p>
  )
}

export default Title