import { ethers } from 'ethers';

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [ /* paste ABI here later */ ];

export const getContract = async () => {
  if (typeof window.ethereum === 'undefined') {
    alert("MetaMask not detected!");
    return;
  }

  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  return contract;
};

