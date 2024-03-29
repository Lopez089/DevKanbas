interface card {
  children: JSX.Element
}

export const Card = ({ children }: card) => {
  return (
    <article className="w-64  min-h-32 p-6 border rounded-xl shadow-md">{children}</article>
  )
}
