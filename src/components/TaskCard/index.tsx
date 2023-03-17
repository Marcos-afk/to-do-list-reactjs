import styles from './styles.module.scss';
import TrashSvg from '../../assets/trash.svg';
import { TaskCardProps } from './TaskCardProps';
import { useTaskContext } from '../../hooks/useTaskContext';

export const TaskCard = ({ task }: TaskCardProps) => {
  const { removeTask, checkTask } = useTaskContext();

  return (
    <div className={styles.taskCard}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" checked={task.isCompleted} onClick={() => checkTask(task.id)} />
        <span className={styles.checkmark}></span>
      </label>
      <p className={task.isCompleted ? styles.completedTaskText : styles.pendingTaskText}>{task.description}</p>
      <button onClick={() => removeTask(task.id)}>
        <img src={TrashSvg} alt="trash" />
      </button>
    </div>
  );
};
