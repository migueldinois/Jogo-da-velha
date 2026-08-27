
import { useState } from 'react';
import styles from './Header.module.css';
import '../../styles/variables.css';
import logoImg from '../../assets/logo.svg';
import sunImg from '../../assets/sun.svg';
import moonImg from '../../assets/moon.svg';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const toggleTheme = () => {
    // Definindo o proximo tema, que no caso é o tema diferente do atual 
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    
    document.documentElement.setAttribute(
      'data-theme',
      nextTheme ? 'dark' : 'light'
    );
  };

  return (
    <header className={`d-flex justify-content-between align-items-center py-3 px-4 ${styles.headerContainer}`}>
      
      {/* Logo e titulo */}
      <div className="d-flex align-items-center gap-3">
        <img 
          src={logoImg} 
          alt="Logo Jogo da Velha" 
          className={styles.logo} 
        />
        <h1 className={`m-0 h4 ${styles.titulo}`}>Jogo da Velha</h1>
      </div>

      {/* Botão Tema*/}
      <button 
        onClick={toggleTheme}
        className={`btn d-flex align-items-center justify-content-center p-2 ${styles.botaoTema}`}
        aria-label="Alternar tema de cores"
      >
        <img 
          src={isDarkMode ? sunImg : moonImg} 
          alt={isDarkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"} 
          className={styles.temaIcone}
        />
      </button>

    </header>
  );
}