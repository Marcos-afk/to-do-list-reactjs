import styles from './styles.module.scss';
import LogoImg from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={LogoImg} alt="Logo" />
    </header>
  );
};
