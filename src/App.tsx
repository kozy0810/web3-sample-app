import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import LockdropForm from "./components/LockdropForm";
import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
        <br/>
        <LockdropForm />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
