function getDate() {
  const [month, day, year] = new Date()
    .toLocaleString('en', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    .split('/')

  return `${year}-${month}-${day}`
}

export const frontmatter = `
	---
	title: Title
	description: Description.
	slug: slug
	published: ${getDate()}
	category: category
	series: false
	draft: true
	---

	# Title

	## Table of Contents

	## Title

	Fortune favors the bold.

	\`\`\`js:example.js {1} showLineNumbers
	console.log('Excelsior!')
	\`\`\`

	{% img src="image.webp" alt="Description" %}

	{% embed src="image.webp" title="Description" %}

	{% video src="video.mp4" %}
`
  .trim()
  .replace(/\t/g, '')
