import React from 'react';
import { ethers } from 'ethers';

import PropTypes from 'prop-types';

const WalletConnector = ({ onConnect }) => {
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask.');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      onConnect(signer);
    } catch (err) {
      console.error(err);
      alert('Wallet connection failed.');
    }
  };

  return (
    <button onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

WalletConnector.propTypes = {
  onConnect: PropTypes.func.isRequired,
};

export default WalletConnector;
