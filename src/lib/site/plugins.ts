import { visit, SKIP } from 'unist-util-visit'

export function rehypeUnwrapImages() {
	function containsImage(node: any) {
		return (
			node.tagName === 'p' &&
			node.children.some((child: any) => {
				if (child.type === 'element') {
					return child.tagName === 'img'
				}
			})
		)
	}

	return (tree: any) => {
		visit(tree, containsImage, (node, index, parent) => {
			if (node.type === 'element') {
				parent.children.splice(index, 1, ...node.children)
				return [SKIP, index]
			}
		})
	}
}

export function rehypeCopyCode() {
	function codeTitle(node: any) {
		if (node.tagName === 'div') {
			return node.properties.className[0] === 'rehype-code-title'
		}
	}

	return (tree: any) => {
		visit(tree, codeTitle, (node) => {
			if (node.type !== 'element') return

			const value =
				node.children[0].type === 'text' ? node.children[0].value : ''

			node.children = [
				{
					type: 'element',
					tagName: 'span',
					children: [{ type: 'text', value }],
				},
				{
					type: 'element',
					tagName: 'button',
					properties: { className: ['copy'] },
					children: [{ type: 'text', value: `Copy` }],
				},
			]
		})
	}
}
