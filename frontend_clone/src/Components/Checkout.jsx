import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Checkbox,
  Spacer,
} from '@chakra-ui/react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);

  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Payment processed successfully!');
  };

  return (
    <Box p={8} maxW="lg" mx="auto">
      <VStack spacing={6} align="stretch">
        <Heading mb={8} textAlign="center" fontSize="3xl" color="teal.500">
          Secure Checkout
        </Heading>
        {/* Contact Form */}
        <form>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Shipping Address</FormLabel>
            <Input
              type="text"
              placeholder="123 Main Street"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Postal Code</FormLabel>
            <Input
              type="text"
              placeholder="12345"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              placeholder="555-1234"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <Checkbox
            mt={4}
            isChecked={useShippingAsBilling}
            onChange={() => setUseShippingAsBilling(!useShippingAsBilling)}
          >
            Use shipping address as billing address
          </Checkbox>
          <Spacer />
          <Button
            colorScheme="teal"
            size="lg"
            w="100%"
            onClick={handlePayment}
            _hover={{ bg: 'teal.600' }}
          >
            Place Order
          </Button>
        </form>
        {/* Order Summary */}
        <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
          <Heading fontSize="xl" mb={4}>
            Order Summary
          </Heading>
          {/* Display order summary here */}
          <Text>Total: $100.00</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Checkout;