import clsx from 'clsx'
import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={clsx(className, "max-w-7xl mx-auto px-4")}>
      {children}
    </div>
  )
}

export default Container
