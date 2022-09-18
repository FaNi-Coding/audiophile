/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../UI-Components/Buttons/Button'

type Props = {
  array: any
  mobile?: boolean
  menuItems?: boolean
  components?: any
}

const LinkItems = ({ array, menuItems }: Props) => {
  return array.map((item: any, idx: number) => (
    <>
      <li key={idx}>
        {menuItems && <img src={item.img} alt={item.name} />}
        <Link href={item.href}>
          <a>
            <p>{item.name}</p>
          </a>
        </Link>
        {menuItems && <Button secondary>shop</Button>}
      </li>
    </>
  ))
}

export default LinkItems
