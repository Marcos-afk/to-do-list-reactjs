/* eslint-disable no-unused-vars */
import { TaskDTO } from '../../dtos/Task';

export interface TaskProviderProps {
  children: React.ReactNode;
}

export interface TaskContextProps {
  tasks: TaskDTO[];
  addTask: (task: TaskDTO) => void;
  removeTask: (id: string) => void;
  checkTask: (id: string) => void;
  countTasks: () => {
    completedTasksNumber: number;
    totalTasksNumber: number;
  };
}
