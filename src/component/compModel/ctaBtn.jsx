import {Box, Button} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function CtaBtn({
  texte = 'texte',
  lien = '/configurateur',
  dark = false,
}) {
  return (
    <Link href={lien}>
      <Button variant={dark ? 'btnCommandligth' : 'btnCommand'}>{texte}</Button>
    </Link>
  )
}
