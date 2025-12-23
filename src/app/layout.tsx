"use client"

import React from 'react'
import { ContextTarefaProvider } from '../data/ContextTarefa'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ContextTarefaProvider>
          {children}
        </ContextTarefaProvider>
      </body>
    </html>
  )
}
