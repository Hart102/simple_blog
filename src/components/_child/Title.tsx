import React from 'react'

interface titleInterface {
  title?: string
}

const Title: React.FC<titleInterface> = ({ title }) => {
  return (
    <p className='font-bold uppercase mb-10 text-red-600'>{title}</p>
  )
}

export default Title