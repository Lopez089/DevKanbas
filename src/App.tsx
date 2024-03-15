import { useState } from 'react';
import { Container } from './components/container';
import { task } from './interfaces';

const fakeData: task[] = [
  {
    id: 'lkjlhiugig',
    task: 'hacer de comer'
  },
  {
    id: 'lkjdsfasdfaslhiugig',
    task: 'hacer la cama'
  },
  {
    id: '2345keijf',
    task: 'correr'
  }
]

const App = () => {
  const [task, seTask] = useState(fakeData)
  return (
    <>
      <main>
        <Container>
          <h1 className="text-3xl font-bold underline">hola</h1>
        </Container>
      </main>
    </>
  )
}

export default App
