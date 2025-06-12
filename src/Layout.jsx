import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <h1 style={styles.logo}>TodoEsPosible</h1>
          <div>
            <Link to="/" style={styles.link}>Inicio</Link>
            <Link to="/about" style={styles.link}>Acerca de</Link>
          </div>
        </nav>
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>

      <footer style={styles.footer}>
        <p>Derechos Reservados © 2025 | TodoEsPosible</p>
      </footer>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffeef3',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#e75480',
    padding: '20px 40px',
    color: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: 0
  },
  link: {
    color: '#fff',
    marginLeft: '20px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  main: {
    flex: 1,
    padding: '40px',
    backgroundImage: 'url("https://source.unsplash.com/1600x900/?motivation")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#333',
    backdropFilter: 'blur(4px)',
    backgroundRepeat: 'no-repeat'
  },
  footer: {
    backgroundColor: '#e75480',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    fontSize: '0.9rem'
  }
};

export default Layout;
