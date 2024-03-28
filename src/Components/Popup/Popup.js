import './Popup.css'
import { useContext, useState } from 'react'
import { MyContext } from '../Context/Context'

const Popup = ({ openpopup }) => {

  const { todo, settodo, doing, setdoing, done, setdone } = useContext(MyContext)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [status, setStatus] = useState('todo')

  const createTask = () => {
    if (!taskName.trim()) {
      alert('Task name is required')
      return
    }
    const newTask = { name: taskName, description: taskDescription }

    switch (status) {
      case 'todo':
        settodo([...todo, newTask])
        break
      case 'doing':
        setdoing([...doing, newTask])
        break
      case 'done':
        setdone([...done, newTask])
        break
      default:
        break
    }

    setTaskName('')
    setTaskDescription('')
    setStatus('todo')
    openpopup()
  }

  return (
    <div className='popup'>
      <div className="top-pop">
        <h1>Add New Task</h1>
        <span onClick={openpopup}>X</span>
      </div>
      <div className='input-group'>
        <label htmlFor='task-name'>Task Name</label>
        <input
          id='task-name'
          type='text'
          placeholder='Add task here'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
      </div>
      <div className='input-group'>
        <label htmlFor='status'>Current Status</label>
        <select
          id='status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value='todo'>Todo</option>
          <option value='doing'>Doing</option>
          <option value='done'>Done</option>
        </select>
      </div>
      <button onClick={createTask}>Create Task</button>
    </div>
  )
}

export default Popup
