import { Button, Container } from "@chakra-ui/react";
import { BigNumber, ethers } from "ethers";
import { useMetaMask } from "metamask-react";
import { useEffect } from "react";
import abi from '../contracts/hamberger-nft-abi.json';

function Home() {

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  // useEffect(() => {
  //   console.log('Metamask status: ', status);
  //   console.log('Metmask connect: ', connect);
  //   console.log('Metamask account: ', account);
  //   console.log('Metamask chainId: ', chainId);
  //   console.log('Metamask ethereum: ', ethereum);
  // }, [status, account, chainId]);

  const connectToMetamask = async () => {
    await connect();
  };

  // const contractAddress = "0x522BF3384b23e8Eb58B477f417a2cDDaa90D353D";
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const mint = async () => {
    if (!ethereum) return;
    const signer = new ethers.providers.Web3Provider(ethereum).getSigner();
    
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const currentBlockTime: BigNumber = await contract.getBlockTime();
    const mintedAt: BigNumber = await contract.lastMintedOn();
    console.log('Difference: ', currentBlockTime.sub(mintedAt).toNumber());
  };

  return (
    <Container p={0} m={0}>
      <Button onClick={connect}>{`Connect Metamask`}</Button>
      {account && <Button onClick={mint}>Mint</Button>}
    </Container>
  );
}

export default Home;
