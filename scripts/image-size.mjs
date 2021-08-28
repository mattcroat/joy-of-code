import { join } from 'path'
import { readdirSync } from 'fs'
import sizeOf from 'image-size'

const directory = process.argv[2]
const imagesPath = join(process.cwd(), `../../public/images/${directory}`)

const imagesFilePaths = readdirSync(imagesPath)

imagesFilePaths
  .map((fileName) => {
    const { height, width } = sizeOf(`${imagesPath}/${fileName}`)

    const image = `
      <Image
        height={${height}}
        width={${width}}
        src="/images/${directory}/${fileName}"
        alt="Description"
      />
    `

    return image
  })
  .join('')
