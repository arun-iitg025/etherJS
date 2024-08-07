import './App.css';
import {useEffect} from 'react';
const {ethers} = require("ethers")


function App() {
  const walletAddress = "0xf1f4e7419befda7f9bef93363b6f54811d154ab0";

  
  useEffect(()=>{
    const walletABI =[
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "accountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "setEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
    const writeContract = async () =>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts",[]);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress,walletABI,signer);
      // await contract.setValue(2);
      // await contract.sendEthContract({value:ethers.utils.parseEther("0.0000001")})
      await contract.setEthUser("0xe0988Cb47dd0a0875556f5ac1F80Eb01A8B42538",{value:ethers.utils.parseEther("0.0000001")});
    };
    writeContract();
  }, []);
  return (
    <div className="App">
     <h3>This is EtherJS Lacture</h3>
    </div>
  );
}

export default App;
