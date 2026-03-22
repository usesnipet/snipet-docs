---
sidebar_position: 1
---

# Início rápido

Bem-vindo ao **Snipet**.

O Snipet é uma plataforma para construção de aplicações de IA, focada em resolver os problemas comuns de:

- entrada de dados
- contexto e memória
- recuperação de conhecimento (RAG)
- orquestração de execução
- uso de múltiplos modelos

> Em vez de montar toda a infraestrutura, você foca apenas no **caso de uso**.

---

## Como pensar o Snipet

Tudo no Snipet segue o mesmo fluxo:

```

Input → Contexto → Execução → Output

```

---

## Conceitos essenciais

Antes de começar, entenda os blocos principais:

### [Snipet](concept/snipet.md)
Unidade de execução.

É onde tudo acontece: inputs, contexto, execução e output.

Pense como:
- uma conversa
- uma tarefa
- uma execução isolada

---

### [Knowledge Source](concept/knowledge-source.md)
Origem dos dados.

Ex:
- banco de dados
- arquivos
- APIs
- Notion, GitHub, etc.

---

### [Knowledge Base](concept/knowledge-base.md)
Agrupamento de fontes.

Organiza o conhecimento por domínio:

- suporte
- vendas
- engenharia

---

### [Embedding Pipeline](concept/embedding-pipeline.md)
Transforma dados em vetores pesquisáveis.

Fluxo:
```

dados → chunks → preprocess → embedding → indexação

```

---

### [Scope](concept/scope.md)
Memória compartilhada entre execuções.

- persistente
- versionado
- controlado

---

### [Skill](concept/skill.md)
Ações externas.

Ex:
- criar ticket
- enviar mensagem
- atualizar banco

---

## Fluxos principais

O Snipet possui dois fluxos principais:

### 1. Ingestão de dados

```

Knowledge Source
→ Pipeline de Embedding
→ Indexação

```

Responsável por preparar os dados para busca.

Veja: [Ingestion Flow](flow/ingestion-flow.md)

---

### 2. Execução

```

Input
→ Contexto
→ Modelo
→ Skills
→ Output

```

Responsável por gerar respostas e executar ações.

Veja: [Execution Flow](flow/execution-flow.md)

---

## Primeiro exemplo mental

Imagine um chatbot de suporte:

1. Você conecta:
   - Zendesk
   - Email
   - Base de documentação

2. Cria uma **Knowledge Base** chamada "Suporte"

3. Define um **Embedding Pipeline**

4. Quando o usuário pergunta:

```

"Como resetar minha senha?"

```

O Snipet:

- entende a intenção
- busca contexto na base
- usa um modelo
- retorna a resposta

---

## Filosofia do Snipet

- simples por padrão
- leitura ≠ escrita
- contexto é controlado

---

## Próximos passos

Agora você pode explorar os conceitos com mais profundidade:

1. [`Knowledge Source`](concept/knowledge-source.md)
2. [`Embedding Pipeline`](concept/embedding-pipeline.md)
3. [`Knowledge Base`](concept/knowledge-base.md)
4. [`Scope`](concept/scope.md)
5. [`Skill`](concept/skill.md)
6. [`Snipet`](concept/snipet.md)

Ou entender os fluxos:

- [`Ingestion Flow`](flow/ingestion-flow.md)
- [`Execution Flow`](flow/execution-flow.md)

---

## Dica

Se você já trabalhou com RAG, pense no Snipet como:

> **RAG + Orquestração + Memória + Execução de ações.**
