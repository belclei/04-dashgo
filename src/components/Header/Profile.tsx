import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Belclei Fasolo</Text>
        <Text color="gray.300" fontSize="sm">
          belclei@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Belclei Fasolo" src="https://github.com/belclei.png" />
    </Flex>
  )
}
