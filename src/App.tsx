import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <img src="/decentrarent-logo.jpg" alt="DecentraRent Logo" style={styles.logo} />
      <h1 style={styles.title}>DecentraRent</h1>
      <button style={styles.button}>Connect Wallet</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    marginTop: '10vh',
  },
  logo: {
    width: '120px',
    marginBottom: '20px',
    borderRadius: '8px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#3e206d',
    marginBottom: '20px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#3e206d',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default App;

