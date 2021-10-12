import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { useSidebarDrawer } from '../../contexts/SidebvarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex w="100%" as="header" maxW={1480} h="20" mx="auto" mt="4" px="6" align="center">
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
