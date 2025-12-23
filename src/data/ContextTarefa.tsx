import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Tarefa } from '../types/tarefa'

type ContextTarefaType = {
  tarefas: Tarefa[]
  carregarTarefas: () => Promise<void>
  adicionarTarefa: (titulo: string) => void
  removerTarefa: (id: number) => void
}

const ContextTarefa = createContext<ContextTarefaType | undefined>(undefined)

export const useTarefas = () => {
  const ctx = useContext(ContextTarefa)
  if (!ctx) throw new Error('useTarefas must be used within ContextTarefaProvider')
  return ctx
}

export const ContextTarefaProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  const carregarTarefas = async () => {
    try {
      const res = await fetch('https://dummyjson.com/todos')
      const data = await res.json()
      const lista = (data.todos || []).map((t: any) => ({
        id: t.id,
        titulo: t.todo ?? t.title ?? 'Sem título',
        concluida: !!t.completed,
      }))
      setTarefas(lista)
    } catch (err) {
      console.error('Erro ao carregar tarefas', err)
    }
  }

  const adicionarTarefa = (titulo: string) => {
    const nova: Tarefa = { id: Date.now(), titulo, concluida: false }
    setTarefas((s) => [nova, ...s])
  }

  const removerTarefa = (id: number) => {
    setTarefas((s) => s.filter((t) => t.id !== id))
  }

  useEffect(() => {
    carregarTarefas()
  }, [])

  return (
    <ContextTarefa.Provider value={{ tarefas, carregarTarefas, adicionarTarefa, removerTarefa }}>
      {children}
    </ContextTarefa.Provider>
  )
}
