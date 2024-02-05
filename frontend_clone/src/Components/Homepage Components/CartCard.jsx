import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,
    DrawerCloseButton,
    Image,
    Stack,
    ButtonGroup,
    Heading,
    Text,
    Divider,Box,Button
  } from '@chakra-ui/react'
const CartCard = () => {
  return (
    <div>
       <Card maxW='sm' border={'1px solid'}  borderRadius={'0.5rem'} padding={'0.5rem'} margin={'1rem 0'}>
  <CardBody >
    <Box width={'100%'}>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      width={'100%'}
    />
    </Box>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text color='blue.600' fontSize='2xl'>
        Rupees 450
      </Text>
      <ButtonGroup spacing='5'>
      <Button variant='solid' paddingLeft={'0.5rem'} paddingRight={'0.5rem'}  border={'1px solid'} color={'black'} borderRadius={'0.3rem'} colorScheme='blue'>
        -
      </Button>
      <Button variant='solid'   border={'1px solid'} color={'black'} borderRadius={'0.3rem'} colorScheme='blue'>
       1
      </Button>
      <Button variant='ghost'   border={'1px solid'} color={'black'} borderRadius={'0.3rem'} colorScheme='blue'>
       +
      </Button>
    </ButtonGroup>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' backgroundColor={'blue'} opacity={'0.5'} border={'transparent'} color={'white'} borderRadius={'0.3rem'} colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' backgroundColor={'blue'} opacity={'0.5'} border={'transparent'} color={'white'} borderRadius={'0.3rem'} colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default CartCard
