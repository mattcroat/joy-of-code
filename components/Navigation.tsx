import { Box, Heading, List, ListItem } from '@chakra-ui/react'
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faBrush, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = (): JSX.Element => (
  <Box
    as="nav"
    h="100vh"
    maxW="80px"
    minW="80px"
    pos="fixed"
    top={0}
    left={0}
    px={4}
    bg="gray.800"
    boxShadow="lg"
    borderRight="2px"
    borderColor="gray.900"
  >
    <List h="100%" d="flex" flexDir="column" alignItems="center">
      <Heading my={8}>
        <Box color="orange.200">
          <FontAwesomeIcon icon={faBrush} size="sm" />
        </Box>
      </Heading>
      <ListItem mt={8}>
        <Box
          color="gray.600"
          _hover={{
            color: 'orange.200',
            transform: 'scale(1.1)',
          }}
        >
          <FontAwesomeIcon icon={faReact} size="2x" />
        </Box>
      </ListItem>
      <ListItem mt={8}>
        <Box
          color="gray.600"
          _hover={{
            color: 'orange.200',
            transform: 'scale(1.1)',
          }}
        >
          <FontAwesomeIcon icon={faJs} size="2x" />
        </Box>
      </ListItem>
      <ListItem mt={8}>
        <Box
          color="gray.600"
          _hover={{
            color: 'orange.200',
            transform: 'scale(1.1)',
          }}
        >
          <FontAwesomeIcon icon={faHtml5} size="2x" />
        </Box>
      </ListItem>
      <ListItem mt={8}>
        <Box
          color="gray.600"
          _hover={{
            color: 'orange.200',
            transform: 'scale(1.1)',
          }}
        >
          <FontAwesomeIcon icon={faCss3Alt} size="2x" fixedWidth />
        </Box>
      </ListItem>
      <ListItem mt="auto" mb={8}>
        <Box
          color="gray.600"
          _hover={{
            color: 'orange.200',
            transform: 'scale(1.1)',
          }}
        >
          <FontAwesomeIcon icon={faSun} size="2x" />
        </Box>
      </ListItem>
    </List>
  </Box>
)

export default Navigation
