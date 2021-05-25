import React from 'react'
import { Box, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'

import { Modal } from '@/root/components/screens/Editor/Modal'
import { Icon } from '@/root/components/shared/Icon'
import { cardTheme } from '@/root/styles/card'

export function PostImage() {
  const [title, setTitle] = React.useState<string>('Placeholder')
  const [theme, setTheme] = React.useState<string>('JavaScript')
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  return (
    <>
      {modalOpen && (
        <Modal theme={theme} title={title} modalOpen={setModalOpen} />
      )}

      <Box maxW="72ch" pl="80px" mx="auto" pt={8}>
        <Box
          onClick={() => setModalOpen(true)}
          pos="relative"
          h="340px"
          mx="auto"
          bg={`${cardTheme[theme].bg}, url('/images/nebula.webp')`}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgBlendMode="color"
        >
          <Box
            as="span"
            pos="absolute"
            top={8}
            left={8}
            px={4}
            py={2}
            fontSize="md"
            fontWeight="bold"
            textTransform="uppercase"
            color="gray.900"
            bg="white"
          >
            Joy Of Code
          </Box>
          <Box
            as="span"
            maxW="80%"
            pos="absolute"
            bottom={8}
            left={8}
            fontSize="6xl"
            fontWeight="bold"
            lineHeight="1"
            letterSpacing="-2px"
            textShadow={`2px 2px 0 hsl(0 0% 0% / 100%)`}
          >
            {title}
          </Box>
          <Box pos="absolute" top={8} right={8} color={cardTheme[theme].color}>
            <Icon icon={cardTheme[theme].icon} size={40} />
          </Box>
        </Box>

        <Box
          as="form"
          // @ts-expect-error I'm going to figure it out later
          onSubmit={(event) => event.preventDefault()}
          d="flex"
          gridGap={4}
          mt={4}
        >
          <FormControl id="title">
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              id="title"
              name="title"
              type="text"
            />
          </FormControl>

          <FormControl id="theme" flexBasis="200px">
            <FormLabel htmlFor="theme">Category</FormLabel>
            <Select
              onChange={(event) => setTheme(event.target.value)}
              id="theme"
              name="theme"
            >
              <option>JavaScript</option>
              <option>React</option>
              <option>CSS</option>
              <option>General</option>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
