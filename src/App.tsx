import { useState } from 'react';
import { Container } from './components/container';
import { ContainerTask } from './containers/containerTask';
import { task } from './interfaces';

const fakeData: task[] = [
  {
    id: 'lkjlhiugig',
    task: 'hacer de comer, carne con tomate'
  },
  {
    id: 'lkjdsfasdfaslhiugig',
    task: 'hacer la cama'
  },
  {
    id: '2345keijf',
    task: 'correr'
  },
  {
    id: 'lore',
    task: "Laborum aute ea cupidatat sint anim consectetur deserunt reprehenderit Lorem enim. Incididunt sint proident "
  }
]

const App = () => {
  const [task, seTask] = useState(fakeData)
  return (
    <>
      <main>
        <Container>
          <ContainerTask tasks={task} />
        </Container>
      </main>
    </>
  )
}

export default App
