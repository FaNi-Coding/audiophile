import Link from 'next/link'

type Props = {
  href?: string | Object
  text?: string
}

const LinkUI = ({ href, text = 'linkText' }: Props) => {
  return (
    <Link href={href!}>
      <a>{text}</a>
    </Link>
  )
}

export default LinkUI
