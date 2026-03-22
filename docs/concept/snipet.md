---
sidebar_position: 5
---

# Snipet

O **Snipet** é a unidade central de execução da plataforma.

Ele representa um **contexto isolado onde um input é processado, decisões são tomadas, contexto é recuperado e um output é gerado**.

> Tudo no Snipet segue o princípio:
>
> **input → execução → output**

---

## 🧠 O que é um Snipet?

Um Snipet pode ser entendido como:

- uma conversa
- uma tarefa
- uma execução de IA
- um fluxo de decisão

Ele contém tudo que é necessário para executar uma interação:

- inputs
- contexto
- histórico
- configurações
- resultados

---

## 🔹 Características

- **Isolado**
  Cada Snipet possui seu próprio contexto

- **Mutável**
  O estado evolui ao longo do tempo

- **Temporal**
  O contexto do Snipet é **dinâmico e versionado**, refletindo mudanças ao longo do tempo

- **Efêmero ou persistente**
  Pode existir apenas durante a execução ou ser armazenado

- **Observável**
  Todas as execuções podem ser rastreadas (inputs, contexto, outputs)

---

## ⏳ Contexto temporal

O contexto de um Snipet não é estático.

Assim como o [Scope](scope.md), ele evolui ao longo do tempo:

- informações são atualizadas
- dados mudam
- preferências evoluem
- novos inputs alteram o estado

Isso significa que o Snipet mantém um **histórico versionado do seu contexto**, permitindo:

- entender como o estado mudou
- recuperar informações anteriores
- analisar decisões passadas
- dar continuidade a interações longas

> O Snipet representa um **estado de trabalho em evolução**, não um snapshot fixo.

---

## 🧱 Estrutura

Um Snipet pode conter:

- **Inputs** → dados recebidos (texto, arquivos, eventos)
- **Contexto** → informações usadas na execução
- **Histórico** → interações anteriores
- **Outputs** → respostas ou ações geradas
- **Metadados** → informações auxiliares (tempo, origem, etc.)

---

## ⚙️ Como funciona

Durante uma execução, o Snipet passa por um fluxo padrão:

```

Input
→ Intent Resolver
→ Recuperação de contexto
(Snipet + Scope + Knowledge Base)
→ Execução (Model + Skills)
→ Output

```
---
## 🔗 Integração com outros conceitos

O Snipet não funciona sozinho — ele se conecta com outros componentes da plataforma:

- **Knowledge Base** → fornece contexto externo
- **Knowledge Source** → origem dos dados
- **Scope** → memória compartilhada entre Snipets
- **Embedding Pipeline** → prepara dados para busca
- **Skill** → executa ações externas

---

## 🧭 Ciclo de vida

Um Snipet pode ter diferentes ciclos de vida:

### Curto (efêmero)

- existe apenas durante uma execução
- usado para tarefas simples

**Exemplo:**
- gerar um resumo
- responder uma pergunta

---

### Longo (persistente)

- mantém histórico e contexto ao longo do tempo
- evolui com múltiplas interações

**Exemplo:**
- chatbot
- assistente contínuo
- fluxo de atendimento

---

## 🧩 Snipet vs Scope

- **Snipet**
  - contexto local
  - temporal e mutável
  - ciclo de vida limitado (mas pode ser persistido)

- **Scope**
  - contexto global
  - persistente e compartilhado
  - controlado entre múltiplos Snipets

---

## 🧠 Filosofia

O Snipet não representa uma “verdade”.

Ele representa um **estado de trabalho em evolução**:

- pode conter dados incompletos
- muda ao longo do tempo
- reflete o histórico de decisões
- pode ser descartado ou persistido

---

## 📌 Resumo

- Snipet = **unidade de execução**
- encapsula input, contexto e output
- possui contexto **temporal e versionado**
- isolado, mas conectado ao ecossistema
- pode ser efêmero ou persistente
- representa um estado de trabalho em evolução
