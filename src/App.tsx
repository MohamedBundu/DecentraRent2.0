import React, { useState } from 'react';
import { ethers, type Signer } from 'ethers';
import useRole from './hooks/useRole';
import LandlordDashboard from './components/LandlordDashboard';
import TenantDashboard from './components/TenantDashboard';
import LeaseContractABI from '../contracts/LeaseContract.json'; 

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

function App() {
  const [signer, setSigner] = useState<Signer | null>(null);
  const role = useRole(CONTRACT_ADDRESS, signer);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask to use this DApp.');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setSigner(signer);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  if (signer && role === 'landlord') {
    return <LandlordDashboard signer={signer} />;
  }

  if (signer && role === 'tenant') {
    return <TenantDashboard signer={signer} />;
  }

  return (
    <div style={styles.container}>
      <img src="/decentrarent-logo.jpg" alt="DecentraRent Logo" style={styles.logo} />
      <h1 style={styles.title}>DecentraRent</h1>
      <button onClick={connectWallet} style={styles.button}>Connect Wallet</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center' as const,
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
