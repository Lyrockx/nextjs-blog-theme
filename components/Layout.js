import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add('dark');
      html.style.backgroundColor = '#1a1a1a';
    } else if (lightMode) {
      html.classList.remove('dark');
      html.style.backgroundColor = '#f2f2f2';
    } else {
      html.style.backgroundColor = '#f2f2f2';
    }
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        document.documentElement.style.backgroundColor = '#1a1a1a';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        document.documentElement.style.backgroundColor = '#f2f2f2';
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
}
