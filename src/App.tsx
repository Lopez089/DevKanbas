import { useState } from 'react';
import { Container } from './components/container';
import { ContainerTask } from './containers/containerTask';
import { task } from './interfaces';

const fakeData: task[] = [
  {
    id: 'lkjlhiugig',
    task: 'hacer de comer, carne con tomate',
    state: 'not stated'
  },
  {
    id: 'lkjdsfasdfaslhiugig',
    task: 'hacer la cama',
    state: 'not stated'
  },
  {
    id: '2345keijf',
    task: 'correr',
    state: 'not stated'
  },
  {
    id: 'lore',
    task: "Laborum aute ea cupidatat sint anim consectetur deserunt reprehenderit Lorem enim. Incididunt sint proident ",
    state: 'not stated'
  }
]



const App = () => {
  const [task, setTask] = useState<task[]>(fakeData)
  const [newTask, setNewTask] = useState<task | undefined>(undefined)
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
