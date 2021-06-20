import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import { cardTheme } from '@/root/styles/cardTheme'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { Icon } from '@/root/components/shared/Icon'
import { MotionBox } from '@/root/components/shared/MotionBox'
import { playSound } from '@/root/utils/helpers/playSound'

import { usePostViews } from '@/root/hooks/usePostViews'

interface CardProps {
  category: string
  title: string
  slug: string
}

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

export function Card({ category, title, slug }: CardProps) {
  const { views } = usePostViews(slug)

  return (
    <CustomLink
      href={`/${encodeURIComponent(slug)}`}
      isInternal
      prefetch={false}
    >
      <MotionBox
        _hover={{ boxShadow: 'md' }}
        borderRadius="lg"
        h={['200px', '240px']}
        onClick={() => playSound('page')}
        overflow="hidden"
        position="relative"
        variants={cardVariants}
        whileHover={{ y: -10 }}
        zIndex={0}
      >
        <Image
          alt={category}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          layout="fill"
          placeholder="blur"
          priority={true}
          quality={20}
          src={cardTheme[category].bg}
        />
        <Box
          alignItems="center"
          bg="gray.800"
          borderRadius="base"
          color={cardTheme[category].color}
          d="flex"
          gridGap={1}
          left={4}
          position="absolute"
          px={2}
          py={1}
          textColor="gray.400"
          top={4}
        >
          <svg
            height="16"
            role="img"
            viewBox="0 0 576 512"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
              fill="currentColor"
            ></path>
          </svg>
          <Box as="span" fontSize="sm" transform="translateY(1px)">
            {views}
          </Box>
        </Box>
        <Box
          color={cardTheme[category].color}
          position="absolute"
          right={4}
          top={4}
          zIndex="2"
        >
          <Icon icon={cardTheme[category].icon} />
        </Box>
        <Box
          as="span"
          bottom={4}
          color={cardTheme[category].color}
          fontSize={['3xl', '4xl']}
          fontWeight="bold"
          left={4}
          letterSpacing="-2px"
          lineHeight="1"
          maxW="80%"
          position="absolute"
          textShadow={`2px 2px hsla(0, 0%, 0%, 100%)`}
          zIndex="2"
        >
          {title}
        </Box>
      </MotionBox>
    </CustomLink>
  )
}
