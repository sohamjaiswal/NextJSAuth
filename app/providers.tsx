'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children?: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return<SessionProvider>
      {children}
    </SessionProvider>
}