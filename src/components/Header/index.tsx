import { Flex } from '@chakra-ui/react'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
export function Header() {
  return (
    <Flex w="100%" as="header" maxW={1480} h="20" mx="auto" mt="4" px="6" align="center">
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  )
}