import styles from './styles.module.scss';
import PlusSvg from '../../assets/plus.svg';

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        <span>Criar</span>
        <img src={PlusSvg} alt="Search" />
      </button>
    </div>
  );
};
