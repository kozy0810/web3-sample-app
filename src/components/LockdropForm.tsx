import Web3 from "web3";
import getWeb3 from '../helpers/getWeb3';
import { ethDurations, isRopsten } from '../data/lockinfo';
import {
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Flex,
  Heading,
  Button
} from "@chakra-ui/react"

export default function LockdropForm() {
  // async function connectWeb3(): Promise<Web3> {
  //   // Get network provider and web3 instance.
  //   const web3 = await getWeb3();

  //   if (web3 instanceof Web3) {
  //       return web3;
  //   } else {
  //       throw new Error('Cannot get Web3 instance from the client');
  //   }
  // }

  // const web3 = connectWeb3();

  // const currentNetwork = web3.eth.net.getNetworkType();
  // console.log(String(currentNetwork))

  // return isRopsten(String(currentNetwork)) ? (
    return (
    <Flex width="full" align="center" justifyContent="center">
      <Box bg="gray" borderRadius="lg" p={3}>
        <Box textAlign="center">
          <Heading>Lockdrop Form</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Number of ETH</FormLabel>
              <NumberInput defaultValue={1} precision={2} step={0.1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Lock Duration</FormLabel>
              <Select placeholder="Please choose the duration">
                <option value="1">1 Minutes</option>
                <option value="option2">30 Days</option>
                <option value="option2">100 Days</option>
                <option value="option2">300 Days</option>
                <option value="option2">1000 Days</option>
              </Select>
            </FormControl>

            <Button colorScheme="blue" width="full" mt={4} type="submit">
              SUBMIT TRANSACTION
            </Button>

          </form>
        </Box>
      </Box>
    </Flex>
  );
}