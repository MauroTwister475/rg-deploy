
export  function ErrorMessageField({ children }: { children : React.ReactNode }) {
  return (
    <span className='text-red-400 text-sm'>
      {children}
    </span>
  )
}
