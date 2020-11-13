import { Box, Heading, List, ListItem } from '@chakra-ui/react'
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faBrush, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const wheat = 'hsl(40, 76%, 84%)'
const muted = 'hsl(220, 8%, 44%)'

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
        <FontAwesomeIcon icon={faBrush} color={wheat} size="1x" />
      </Heading>
      <ListItem mt={8}>
        <FontAwesomeIcon icon={faReact} color={muted} size="2x" />
      </ListItem>
      <ListItem mt={8}>
        <FontAwesomeIcon icon={faJs} color={muted} size="2x" />
      </ListItem>
      <ListItem mt={8}>
        <FontAwesomeIcon icon={faHtml5} color={muted} size="2x" />
      </ListItem>
      <ListItem mt={8}>
        <FontAwesomeIcon icon={faCss3Alt} color={muted} size="2x" fixedWidth />
      </ListItem>
      <ListItem mt="auto" mb={8}>
        <FontAwesomeIcon icon={faSun} color={muted} size="2x" />
      </ListItem>
    </List>
  </Box>
)

export default Navigation
