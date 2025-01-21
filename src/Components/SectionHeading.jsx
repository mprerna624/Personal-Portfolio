import React from 'react'

function SectionHeading({lightColor, darkColor, children, className=''}) {
  return (
    <div className={`flex justify-center items-center gap-4 group ${className}`}>
        <div className={`hidden sm:block h-0.5 w-12 transition-all duration-300 group-hover:w-24 bg-[var(--${lightColor})] dark:bg-[var(--${darkColor})]`} />
        
        <h2 className={`text-3xl md:text-4xl font-semibold tracking-wide uppercase text-center text-[var(--${lightColor})] dark:text-[var(--${darkColor})]
                       cursor-pointer transition-all duration-300 group-hover:tracking-widest`}>
          {children}
        </h2>

        <div className={`hidden sm:block h-0.5 w-12 transition-all duration-300 group-hover:w-24 bg-[var(--${lightColor})] dark:bg-[var(--${darkColor})]`} />
    </div>
  )
}

export default SectionHeading