import styles from './styles.module.scss';

export const Counters = () => {
  return (
    <div className={styles.counters}>
      <div className={styles.tasks}>
        <strong className={styles.tasksCreated}>Tarefas criadas</strong>
        <span>0</span>
      </div>

      <div className={styles.tasks}>
        <strong className={styles.completedTasks}>Concluídas</strong>
        <span>0</span>
      </div>
    </div>
  );
};
