import { Box, Button, Flex, Grid, Heading, Img, Input, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Container={
    height:"700px",
    width:"70%",
    margin:"auto",
    marginBottom:"50px",
    borderRadius:"15px",
    backgroundColor:"#ffffff"
}
function Cart() {
  
  return (
    <Box style={Container}>
      <Heading textAlign="left" pl="10px" pt="10px" fontSize="29px">Order Summary</Heading>
      <Box w="70%" margin="auto" mt="30px" h="600px">
        <SimpleGrid columns={2} gap="14px">
           <Box borderRadius="12px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" w="100%" h="240px">
            <Heading fontSize="22px" color="grey" textAlign="left" pl='12px'>Products</Heading>
            <Box mt="12px" h="200px">
              <Flex>
                <Box><Img w="120px" src="https://www.netmeds.com/images/product-v1/150x150/821313/kapiva_aloe_amla_juice_1_ltr_0_2.jpg" /></Box>
                <Box textAlign="left" padding="12px"><Text>Kapiva Aloe + Amla Juice 1 ltr</Text>
                <Text color="green" fontSize="13px">Only 10 Left In Stock</Text>
                <Text color="grey" fontSize="13px">Mkt: The Man Company</Text>
                <Text color="red">₹ 420.00  </Text>
                <Flex mt="12px" float="right" gap="10px">
                  <Button>Remove</Button>
                  <Button>Save for later</Button>
                </Flex>
                </Box>
              </Flex>
            </Box>
           </Box>
           <Box borderRadius="12px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" pl="14px" textAlign="left" w="70%" h="120px">
            <Text color="grey" fontWeight="500">APPLY PROMOCODE / NMS SUPERCASH</Text>
            <Flex gap="20px">
              <Box h="33px" w="6%">
                <input type="radio" />
                </Box>
                <Box>
                  <Select border="none" placeholder="Apply Promo Code">
                    <option>50%</option>
                    <option>25%</option>
                    <option>10%</option>
                  </Select>
                  <Text color="grey" fontSize="13px">Get flat discount! Vouchers applicable in payment Option</Text>
                </Box>
            </Flex>
           </Box>
        </SimpleGrid>
        <br/>
        <Box borderRadius="12px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" pl="14px" textAlign="left" mt="-130px" w="35%" mr="130px" h="200px" float="right">
        <Text color="grey" fontWeight="500">PAYMENT DETAILS</Text>
        <Box  lineHeight="30px" height="80%">
          <Flex gap="130px"><Text>MRP TOTAL</Text><Text> 420.00 </Text></Flex>
          <Flex gap="90px"><Text>Netmeds Discount</Text><Text> 42.00</Text></Flex>
          <Flex gap="90px"><Text fontWeight="500">TOTAL AMOUNT</Text><Text fontWeight="500">Rs.378.00</Text></Flex>
          <NavLink to='/checkout'><Button backgroundColor="#24AEB1" color="#fff" w="100%" mt="20px">PROCEED</Button></NavLink>
        </Box>
        
        </Box>

      </Box>
      
    </Box>
  )
}

export default Cart