export interface container {
  children: JSX.Element
}

export const Container = ({ children }: container): JSX.Element => {
  return (
    <section className='container m-auto'  >
      {children}
    </section>
  )
}
