interface button {
  onClick?: () => void
  type: "submit" | "reset" | "button" | undefined
  children: string
}

export const Button = ({ onClick, type, children }: button) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='bg-amber-600 py-2  rounded-xl text-white hover:bg-amber-900' >
      {children}
    </button>
  )
}
