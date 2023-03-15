import styles from './styles.module.scss';
import LogoSvg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={LogoSvg} alt="Logo" />
    </header>
  );
};
