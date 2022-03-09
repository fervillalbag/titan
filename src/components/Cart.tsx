import React, { useContext } from 'react'
import { Box, Button, Text, Flex } from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'

import CartCardProd from './CartCardProd'
import { CartContext } from '../context/Cart'

const Cart: React.FC = () => {
  const { statusCart, setStatusCart } = useContext(CartContext)

  return (
    <>
      <Box
        display={statusCart ? 'block' : 'none'}
        backgroundColor="rgba(0,0,0,0.5)"
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        zIndex="300"
        onClick={() => setStatusCart(false)}
      />
      <Box
        display={statusCart ? 'block' : 'none'}
        position="fixed"
        backgroundColor="white"
        left="0"
        top="0"
        width={{ base: '100%', md: '320px' }}
        height="100vh"
        zIndex="350"
      >
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="100vh"
        >
          <Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              padding="0.9rem 1.25rem"
            >
              <Text fontSize="1.4rem" fontWeight="bold">
                Cart shopping
              </Text>
              <Button
                display="flex"
                justifyContent="center"
                alignItems="center"
                minWidth="initial"
                _focus={{ shadow: 0 }}
                padding={{ base: '0.25rem 0', md: '0' }}
                margin="0"
              >
                <Text
                  as="span"
                  textAlign="center"
                  display="block"
                  fontSize={{ base: '1.45rem', md: '1.25rem' }}
                  color="red.500"
                >
                  <FaTimes />
                </Text>
              </Button>
            </Flex>

            <Box
              padding="0 1.25rem"
              height="calc(100vh - 69px - 8rem)"
              overflowY="auto"
            >
              <CartCardProd />
              <CartCardProd />
              {/* <CartCardProd /> */}
              <CartCardProd />
              <CartCardProd />
              <CartCardProd />
            </Box>
          </Box>

          <Flex
            flexDirection="column"
            padding="0 1.25rem"
            backgroundColor="vary-light-gray"
            height="8rem"
            justifyContent="center"
            position="absolute"
            width="100%"
            bottom="0"
            left="0"
          >
            <Flex width="full" justifyContent="space-between">
              <Text fontWeight="bold">Total</Text>
              <Text fontWeight="bold">$340</Text>
            </Flex>
            <Box marginTop="1rem">
              <Button
                padding="1.5rem 0"
                minWidth="initial"
                backgroundColor="dark-blue"
                rounded="4px"
                color="white"
                width="full"
              >
                Go to cart
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Cart