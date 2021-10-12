import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
}

export function PaginationItem({ number, isCurrent = false }: PaginationItemProps) {
  const props = isCurrent
    ? {
        colorScheme: 'pink',
        disabled: true,
        _disabled: { bgColor: 'pink.500', cursor: 'default' }
      }
    : {
        bg: 'gray.700',
        _hover: { bg: 'gray.500' }
      }
  return (
    <Button size="sm" fontSize="xs" width="4" {...props}>
      {number}
    </Button>
  )
}
