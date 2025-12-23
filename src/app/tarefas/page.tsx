"use client"

import React, { useState } from 'react'
import { useTarefas } from '../../data/ContextTarefa'

export default function TarefasPage() {
  const { tarefas, adicionarTarefa, removerTarefa } = useTarefas()
  const [valor, setValor] = useState('')

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valor.trim()) return
    adicionarTarefa(valor.trim())
    setValor('')
  }

  return (
    <main style={{ padding: 16 }}>
      <h1>Lista de Tarefas (exemplo)</h1>

      <form onSubmit={handleAdd} style={{ marginBottom: 12 }}>
        <input
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Nova tarefa"
          style={{ padding: 8, marginRight: 8 }}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id} style={{ marginBottom: 8 }}>
            <span style={{ marginRight: 8 }}>{t.titulo}</span>
            <button onClick={() => removerTarefa(t.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
