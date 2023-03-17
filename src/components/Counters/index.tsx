import { useTaskContext } from '../../hooks/useTaskContext';
import styles from './styles.module.scss';

export const Counters = () => {
  const { countTasks } = useTaskContext();

  const { completedTasksNumber, totalTasksNumber } = countTasks();

  return (
    <div className={styles.counters}>
      <div className={styles.tasks}>
        <strong className={styles.tasksCreated}>Tarefas criadas</strong>
        <span>{totalTasksNumber}</span>
      </div>

      <div className={styles.tasks}>
        <strong className={styles.completedTasks}>Concluídas</strong>
        <span>
          {completedTasksNumber} de {totalTasksNumber}
        </span>
      </div>
    </div>
  );
};
