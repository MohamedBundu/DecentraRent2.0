import React from 'react';
import { Contract, type Signer } from 'ethers';
import LeaseContract from '../../contracts/LeaseContract.json';
import { supabase } from '../utils/supabase';

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

interface Props {
  signer: Signer;
}

const LandlordDashboard: React.FC<Props> = ({ signer }) => {
  const handleWithdraw = async () => {
    try {
      const contract = new Contract(CONTRACT_ADDRESS, (LeaseContract as any).abi ?? LeaseContract, signer);
      const tx = await contract.withdraw();
      await tx.wait();
      alert('Withdrawal successful!');
    } catch (err) {
      console.error(err);
      alert('Withdraw failed.');
    }
  };

  const handleCreateListing = async () => {
    const { error } = await supabase.from('listings').insert([
      {
        title: 'My Awesome Apartment',
        price: 1.2,
        description: '2 bed, 2 bath in downtown',
        image_url: 'https://via.placeholder.com/150',
      },
    ]);

    if (error) {
      console.error(error);
      alert('Failed to create listing.');
    } else {
      alert('Listing created!');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Landlord Dashboard</h2>
      <button onClick={handleWithdraw} style={styles.button}>Withdraw Funds</button>
      <button onClick={handleCreateListing} style={{ ...styles.button, marginLeft: '1rem' }}>
        Create Listing
      </button>
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

export default LandlordDashboard;
