import { Box, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import React from 'react'

import { cardTheme } from '@/root/styles/cardTheme'
import { Icon } from '@/root/components/shared/Icon'
import { Modal } from '@/root/components/screens/Editor/Modal'

type FormEvent =
  | React.FormEvent<HTMLDivElement>
  | React.FormEvent<HTMLFormElement>

export function PostImage() {
  const [title, setTitle] = React.useState<string>('Placeholder')
  const [category, setCategory] = React.useState<string>('CSS')
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  return (
    <>
      {modalOpen && (
        <Modal category={category} modalOpen={setModalOpen} title={title} />
      )}

      <Box maxW="72ch" mx="auto" pl="80px" pt={8}>
        <Box
          bgImage={cardTheme[category].bg}
          bgRepeat="no-repeat"
          bgSize="cover"
          h="340px"
          mx="auto"
          onClick={() => setModalOpen(true)}
          pos="relative"
        >
          <Box
            as="span"
            bg="white"
            color="gray.900"
            fontSize="md"
            fontWeight="bold"
            left={8}
            pos="absolute"
            px={4}
            py={2}
            textTransform="uppercase"
            top={8}
          >
            <Box as="span" css={{ transform: 'translateY(2px)' }} d="block">
              Joy Of Code
            </Box>
          </Box>
          <Box
            as="span"
            bottom={8}
            fontSize="6xl"
            fontWeight="bold"
            left={8}
            letterSpacing="-2px"
            lineHeight="1"
            maxW="80%"
            pos="absolute"
            textShadow={`2px 2px 0 hsl(0 0% 0% / 100%)`}
          >
            {title}
          </Box>
          <Box
            color={cardTheme[category].color}
            pos="absolute"
            right={8}
            top={8}
          >
            <Icon icon={cardTheme[category].icon} size={40} />
          </Box>
        </Box>

        <Box
          as="form"
          d="flex"
          gridGap={4}
          mt={4}
          onSubmit={(event: FormEvent) => event.preventDefault()}
        >
          <FormControl id="title">
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              name="title"
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              value={title}
            />
          </FormControl>

          <FormControl flexBasis="200px" id="theme">
            <FormLabel htmlFor="theme">Category</FormLabel>
            <Select
              id="theme"
              name="theme"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>CSS</option>
              <option>General</option>
              <option>Git</option>
              <option>JavaScript</option>
              <option>React</option>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
