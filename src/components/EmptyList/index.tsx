import styles from './styles.module.scss';
import ClipboardSvg from '../../assets/clipboard.svg';

export const EmptyList = () => {
  return (
    <div className={styles.emptyList}>
      <img src={ClipboardSvg} alt="Empty" />
      <div className={styles.emptyListTextsContainer}>
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
};
