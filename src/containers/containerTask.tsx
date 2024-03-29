import { task } from "src/interfaces"
import { Button } from '../components/button'
import { Card } from '../components/card'
import { ChangeEvent, FormEvent, useId } from "react"

type oldState = {
  oldState: task[]
}

type setNewTask = {
  arg: boolean | task
}
interface containerTask {
  tasks: task[]
  newTask: boolean | task[]
  setNewTask: (task: setNewTask) => boolean | task[]
  setTask: (oldState: oldState) => task[]
}



export const ContainerTask = ({ tasks, newTask, setNewTask, setTask }: containerTask): JSX.Element => {

  const handleNewTask = () => {
    setNewTask(true)
  }

  const id = useId()

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask({
      task: e.target.value,
      id: id
    })
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTask(oldState => [...oldState, newTask])
    setNewTask(false)
  }
  return (
    <div className='grid gap-4 p-8 bg-slate-100 max-w-fit'>
      {
        tasks.map((task: task) => {
          return (
            <Card key={task.id} >
              <p className="font-base">{task.task}</p>
            </Card>
          )
        })
      }
      {
        !newTask ?
          (<Button type='button' onClick={() => handleNewTask()}>Nueva nota</Button>) :
          (<Card>
            <form className="flex flex-col gap-4" onSubmit={(e) => handleOnSubmit(e)}>
              <label>Nueva nota</label>
              <textarea className="p-2" onChange={(e) => handleOnChange(e)} placeholder="Escribe tu nueva tarea"></textarea>
              <div className="grid">
                <Button type='submit'>Agregar nueva nota</Button>
              </div>
            </form>

          </Card>)

      }
    </div>
  )
}
