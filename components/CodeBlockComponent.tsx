import {
  CodeBlock,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLanguage,
  CodeBlockTitle,
} from "@/components/reui/code-block/code-block"

const code = `const me:SoftwareEngineer = {
  name: "Kylee Brown",
  passion: "Building things that make an impact",
  superpower: "Problem solving",
  currently: "Turning ideas into code"
}`

export function CodeBlockComponent() {
  return (
    <div className="w-full max-w-2xl">
      <CodeBlock code={code} language="typescript" showLineNumbers>
        <CodeBlockHeader>
          <CodeBlockTitle>about-me.ts</CodeBlockTitle>
          <CodeBlockLanguage />
          <CodeBlockCopyButton className="ml-auto bg-white! text-gray-400!" />
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  )
}
