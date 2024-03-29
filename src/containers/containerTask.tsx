import { task } from "src/interfaces"
import { Button } from '../components/button'
import { Card } from '../components/card'
import { ChangeEvent, FormEvent, useId } from "react"

interface containerTask {
  tasks: task[]
  newTask: undefined | task
  setNewTask: (arg0: task | undefined) => void
  setTask: (oldState: task[]) => void
}

export const ContainerTask = ({ tasks, newTask, setNewTask, setTask }: containerTask): JSX.Element => {
  const id = useId()

  const handleNewTask = () => {
    setNewTask({
      id: '',
      task: '',
      state: 'not stated'
    })
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!newTask) return;

    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
      id: id
    })
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (newTask) {
      setTask([...tasks, newTask])
      setNewTask(undefined)
    }
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
              <textarea className="p-2 rounded-lg" name='task' onChange={(e) => handleOnChange(e)} placeholder="Escribe tu nueva tarea"></textarea>
              <select name='state' className="p-2 rounded-lg" onChange={(e) => { handleOnChange(e) }}>
                <option value="not stated" key="not stated">Not Stated</option>
                <option value="in progress" key="in progress">In Progress</option>
                <option value="done" key="done">Done</option>
                <option value="archived" key="archived">Archived</option>
              </select>
              <div className="grid">
                <Button type='submit'>Agregar nueva nota</Button>
              </div>
            </form>

          </Card>)

      }
    </div>
  )
}
