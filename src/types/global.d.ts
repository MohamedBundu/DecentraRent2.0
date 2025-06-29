interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: Array<any> }) => Promise<any>;
  on?: (...args: any[]) => void;
}

interface Window {
  ethereum?: EthereumProvider;
}
declare module "*.json" {
  const value: any;
  export default value;
}
