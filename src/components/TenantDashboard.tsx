import React from 'react';
import { Contract, type Signer } from 'ethers';
import LeaseContract from '../../contracts/LeaseContract.json';

const leaseContractTyped = LeaseContract as { abi: any };

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

interface Props {
  signer: Signer;
}

const TenantDashboard: React.FC<Props> = ({ signer }) => {
  const handleSignLease = async () => {
    try {
      const contract = new Contract(CONTRACT_ADDRESS, leaseContractTyped.abi, signer);
      const rentAmount = await contract.rentAmount();
      const deposit = await contract.deposit();
      const total = rentAmount + deposit;

      const tx = await contract.signLease({ value: total });
      await tx.wait();
      alert('Lease signed successfully!');
    } catch (err) {
      console.error(err);
      alert('Signing lease failed.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Tenant Dashboard</h2>
      <button onClick={handleSignLease} style={styles.button}>Sign Lease</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center' as const,
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#3e206d',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default TenantDashboard;
