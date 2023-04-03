import { styled } from "stitches.config"

const Paragraph = styled('p', {
  fontFamily: '$inter',
  fontSize: '$heading-l',
  lineHeight: '$heading-l'
})

export default function Home() {
  return (
    <>
      <Paragraph>Hello world!</Paragraph>
    </>
  )
}
