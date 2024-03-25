import { task } from "src/interfaces"

interface containerTask {
  tasks: task[]
}

export const ContainerTask = ({ tasks }: containerTask): JSX.Element => {
  return (
    <div className='grid gap-4'>
      {
        tasks.map((task: task) => {
          return (
            <article key={task.id} className="w-64  min-h-32 p-6 border rounded-xl shadow-md">
              <p className="font-base">{task.task}</p>
            </article>
          )
        })
      }
    </div>
  )
}
