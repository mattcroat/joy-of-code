const fs = require('fs')
const path = require('path')
const sizeOf = require('image-size')

const directory = process.argv[2]
const imagesPath = path.join(process.cwd(), `../../public/images/${directory}`)

const imagesFilePaths = fs.readdirSync(imagesPath)

const images = imagesFilePaths
  .map((fileName) => {
    const dimensions = sizeOf(`${imagesPath}/${fileName}`)

    const image = `
      <Image
        height={${dimensions.height}}
        width={${dimensions.width}}
        src="/images/${images}/${fileName}"
        alt="Description"
      />
    `

    return image
  })
  .join('')

return images
