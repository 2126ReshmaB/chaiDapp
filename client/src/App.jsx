import { useState,useEffect } from 'react'
import {ethers} from "ethers"
import './App.css'
import Buy from '../components/Buy';
import image from '../assets/up.png';

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="";
      const contractABI="";
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])
  return (
    <div >
      <h3 className='text-white flex justify-center items-center'>Full Stack Dapp using Solidity,Ether.js,Hardhat, and React.js</h3>
    <img src={image} className="" alt=".." width="75%" />
    <p style={{ marginTop: "10px", marginLeft: "5px" ,border: "2px solid white", padding: "10px",color: "grey"}}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state}/>
      
   
  </div>
  )
}

export default App