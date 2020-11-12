import { Box, Heading, List, ListItem } from '@chakra-ui/core'
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// color gradients
// https://codepen.io/fontawesome/pen/BEKpBy

const headingSpace = 8
const itemSpace = 8

const Navbar = (): JSX.Element => (
  <Box h="100vh" maxW="min-content" pl={4} pr={4} bg="gray.900">
    <List h="100%" d="flex" flexDir="column" alignItems="center">
      <Heading mt={headingSpace} mb={headingSpace}>
        <span role="img" aria-label="Artist Palette">
          🎨
        </span>
      </Heading>
      <ListItem mt={itemSpace}>
        <FontAwesomeIcon icon={faReact} color="white" size="3x" fixedWidth />
      </ListItem>
      <ListItem mt={itemSpace}>
        <FontAwesomeIcon icon={faJs} color="white" size="3x" fixedWidth />
      </ListItem>
      <ListItem mt={itemSpace}>
        <FontAwesomeIcon icon={faHtml5} color="white" size="3x" fixedWidth />
      </ListItem>
      <ListItem mt={itemSpace}>
        <FontAwesomeIcon icon={faCss3Alt} color="white" size="3x" fixedWidth />
      </ListItem>
    </List>
  </Box>
)

export default Navbar
