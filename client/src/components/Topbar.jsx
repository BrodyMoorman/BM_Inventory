import { Flex, HStack, Text, VStack, Box, Avatar, Menu, MenuDivider,
   MenuButton, MenuList, MenuItem, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'

export default function Topbar() {
  return (
    <Flex pl={'20px'} pr='20px' w="100vw" h="8vh" justify='space-between' align='center'>
        <Text fontSize={"2xl"} fontWeight={"bold"} >InventoryApp</Text>
        <HStack fontSize={"xl"}>
          <ChakraLink as={ReactRouterLink} to='/'>
            Home
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/parts'>
            Parts
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/builds'>
            Builds
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/admin'>
            Admin
          </ChakraLink>
    
        </HStack>
        <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
    </Flex>
  )
}
