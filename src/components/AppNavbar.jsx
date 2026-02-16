import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AppNavbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

useEffect(() => {
  const html = document.documentElement;
  html.classList.toggle('dark', darkMode);
  html.setAttribute('data-theme', darkMode ? 'dark' : 'light');

  const themeLink = document.getElementById('prime-theme');
  if (themeLink) {
    themeLink.href = darkMode
      ? '/themes/lara-dark-blue/theme.css'
      : '/themes/lara-light-blue/theme.css';
  }
}, [darkMode]);

  const items = [
    { label: 'Home', icon: 'pi pi-home', command: () => navigate('/') },
    { label: 'Login', icon: 'pi pi-sign-in', command: () => navigate('/login') },
    { label: 'Counter', icon: 'pi pi-plus-circle', command: () => navigate('/counter') },
     { label: 'Cards', icon: 'pi pi-th-large', command: () => navigate('/cards') },

  ];

  const end = (
    <Button
      icon={darkMode ? 'pi pi-sun' : 'pi pi-moon'}
      className="p-button-text"
      onClick={() => setDarkMode(v => !v)}
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      label={darkMode ? 'Light Mode' : 'Dark Mode'}
    />
  );

  return <Menubar model={items} end={end} />;
}
