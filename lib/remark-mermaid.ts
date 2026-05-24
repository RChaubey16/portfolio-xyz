// Transforms ```mermaid code blocks into <Mermaid chart="..." /> JSX elements
// so rehype-pretty-code never sees them and they render via the MermaidDiagram component.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function remarkMermaid() {
  return (tree: any) => {
    transform(tree)
  }
}

function transform(node: any): void {
  if (!Array.isArray(node.children)) return

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i]

    if (child.type === 'code' && child.lang === 'mermaid') {
      node.children[i] = {
        type: 'mdxJsxFlowElement',
        name: 'Mermaid',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'chart',
            value: child.value,
          },
        ],
        children: [],
      }
    } else if ('children' in child) {
      transform(child)
    }
  }
}
