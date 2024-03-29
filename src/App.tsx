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
  const [task, setTask] = useState<task[]>(fakeData)
  const [newTask, setNewTask] = useState(false)
  return (
    <>
      <main>
        <Container>
          <ContainerTask tasks={task} newTask={newTask} setNewTask={setNewTask} setTask={setTask} />
        </Container>
      </main>
    </>
  )
}

export default App
