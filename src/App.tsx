import React, {ChangeEvent, FC} from 'react';
import './App.css';
import { useState } from 'react';
import {todoType} from './apptypes'
import TodoItem from './TodoItem';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setworkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

    console.log(todoList);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "task")
    {
      setTask(event.target.value)
    }
    else
    {
      setworkDay(Number(event.target.value))
    }
  }

  const addNewTask = ():void => {
    const newTask = {taskName:task,workDay:workDay}
    setTodoList([...todoList,newTask])
    setTask('');
    setworkDay(0);
  }

  const deleteTask = (nameToDelete :string):void  => {
    setTodoList(todoList.filter((task)=>{
      return task.taskName != nameToDelete
    }))
  }
  return (
    <div className="App">
      <div className='maincard'>
        <input className="maincardinput" type="text" value={task} name="task" placeholder='Taskınızı giriniz' onChange={handleChange}/>
        <input className="maincardinput" type="number" value={workDay} name="workDay" placeholder='Deadline' onChange={handleChange} />
        <button className='maincardButton' onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      <div className='todoCard'>
        {todoList.map((task: todoType,index: number) => {
          return <TodoItem key = {index} task={task} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
