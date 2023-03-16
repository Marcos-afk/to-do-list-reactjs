import styles from './styles.module.scss';
import TrashSvg from '../../assets/trash.svg';

export const TaskCard = () => {
  const taskCompleted = false;
  return (
    <div className={styles.taskCard}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <p className={taskCompleted ? styles.completedTaskText : styles.pendingTaskText}>
        Integer urna interdum massa libero. auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <button>
        <img src={TrashSvg} alt="trash" />
      </button>
    </div>
  );
};
