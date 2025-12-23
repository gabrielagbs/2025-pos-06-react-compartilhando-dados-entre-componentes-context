<!-- Instruções concisas para agentes de codificação (Copilot / AI agents) -->
# Instruções para agentes de codificação

Objetivo rápido: ajudar agentes a entender e contribuir neste repositório de atividade sobre React + Context.

- **Visão geral**: é uma atividade didática sobre "Compartilhando dados entre componentes usando Context". A estrutura esperada está descrita em `README.md` e segue o padrão de um projeto React/Next com `src/app`, `src/components`, `src/data` e `src/types`.

- **Arquitetura importante**:
  - Padrão de app: páginas dentro de `src/app` (ex.: `src/app/page.tsx`, `src/app/tarefas/page.tsx`, `src/app/layout.tsx`).
  - UI: componentes em `src/components` (ex.: `src/components/Navbar.tsx`).
  - Contexto de domínio (tarefas): provedor em `src/data/ContextTarefa.tsx` — implementar/usar `useContext` para compartilhar estado entre páginas/componentes.
  - Tipos: `src/types/tarefa.ts` para interfaces/typedefs.

- **Fluxos de dados / por onde começar**:
  1. Localize o provedor de contexto em `src/data/ContextTarefa.tsx` e entenda o shape dos dados em `src/types/tarefa.ts`.
  2. Verifique `src/app/layout.tsx` para onde o provedor deve envolver a árvore (Provider no topo do layout).
  3. Componentes consumidores (ex.: lista de tarefas) devem usar `useContext(ContextTarefa)` em vez de `useState` quando migrados.

- **Padrões de implementação observáveis**:
  - Preferir separar lógica de dados (provider) em `src/data` e UI em `src/components`.
  - Nomes de arquivos/types seguem `CamelCase` para componentes (`Navbar.tsx`) e `kebab`/`camel` para pastas; manter `Context` com sufixo `Tarefa` quando for do domínio.

- **Comandos de desenvolvimento (padrões comuns — confirmar no `package.json`)**:
  - Instalar dependências: `npm install` (ou `pnpm install` / `yarn`).
  - Rodar em modo desenvolvimento (Next.js padrão): `npm run dev`.
  - Build: `npm run build`; Start: `npm start` / `npm run start`.
  Se o repositório usar outro gerenciador, siga o `package.json` presente.

- **Exemplos de tarefas que o agente pode ajudar**:
  - Migrar componente que usa `useState` para consumir `ContextTarefa` com `useContext`.
  - Implementar o Provider em `src/data/ContextTarefa.tsx` com funções: `adicionarTarefa`, `removerTarefa`, `listarTarefas` (usar `dummyjson.com/todos` como fonte inicial, conforme README).
  - Criar/atualizar `src/types/tarefa.ts` para refletir o payload de `dummyjson.com`.

- **Integrações externas**:
  - Fonte de dados sugerida: https://dummyjson.com/docs/todos — os dados iniciais da atividade devem vir daí.
  - Possível uso de Tailwind / Heroicons conforme links no `README.md` (ver dependências no `package.json`).

- **Diretrizes específicas para PRs geradas por agentes**:
  - Faça PRs pequenos e focados (ex.: "migrar ListaTarefas para Context" ou "adicionar Provider de tarefas").
  - Inclua notas no PR referenciando o arquivo alterado e a linha/arquivo principal (ex.: `src/data/ContextTarefa.tsx`).

- **Onde buscar contexto humano**:
  - Consulte o `README.md` para objetivos e estrutura (página inicial do repositório).

Se algo no repositório estiver ausente (por exemplo `package.json`), pergunte antes de assumir padrões de build. Solicite ao mantenedor o gerenciador de pacotes preferido e se há preferências por `pnpm`/`yarn`.

---
_Gerado com base no `README.md`. Peça feedback se alguma parte estiver imprecisa ou incompleta._
