import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import LeaseContractABI from '../contracts/TheLeaseContract.sol/LeaseContract.json';

export default function useRole(contractAddress: string, signer: ethers.Signer | null) {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRole() {
      if (!signer || !contractAddress) return;

      try {
        const address = await signer.getAddress();
        const contract = new ethers.Contract(contractAddress, LeaseContractABI.abi, signer);
        const isLandlord = await contract.isLandlord(address);
        setRole(isLandlord ? 'landlord' : 'tenant');
      } catch (error) {
        console.error('Error checking role:', error);
      }
    }

    fetchRole();
  }, [signer, contractAddress]);

  return role;
}
