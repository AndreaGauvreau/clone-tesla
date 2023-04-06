import {Box, Button} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function CtaBtn({texte = 'texte', lien = '/'}) {
  return (
    <Link href={lien}>
      <Button variant={'btnCommand'}>{texte}</Button>
    </Link>
  )
}
