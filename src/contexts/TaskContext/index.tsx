import { createContext, useState } from 'react';
import { TaskDTO } from '../../dtos/Task';
import { TaskContextProps, TaskProviderProps } from './TaskContextProps';

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  const addTask = (task: TaskDTO) => {
    setTasks((tasks) => [...tasks, task]);
  };

  const removeTask = (id: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const checkTask = (id: string) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };

  const countTasks = () => {
    const completedTasksNumber = tasks.filter((task) => task.isCompleted === true).length;
    const totalTasksNumber = tasks.length;
    return { completedTasksNumber, totalTasksNumber };
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, checkTask, countTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
