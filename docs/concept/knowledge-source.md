---
sidebar_position: 1
---

# Fonte de conhecimento

Uma **fonte de conhecimento** é o local de onde os dados são obtidos.

Ela representa uma **origem externa de leitura**, como:

- sistema de arquivos
- banco de dados
- APIs
- serviços de mensagens
- MCP Resources

> Uma Knowledge Source é sempre **read-only**: o Snipet nunca altera os dados na origem.

:::note
MCP Resources e MCP Tools geralmente trabalham juntos.
No Snipet, eles são **separados intencionalmente** para manter consistência com o [fluxo de execução](../flow/execution-flow.md):

- **Resources** → leitura de dados (Knowledge Source)
- **Tools** → execução de ações ([Skills](skill.md))
:::

---

## Fragmento

Um **fragmento** é a menor unidade de dado vinda de uma fonte de conhecimento.

Exemplos:

- um arquivo
- uma mensagem
- um registro de banco
- um documento

Os fragmentos são a base para separação, processamento, indexação e recuperação de contexto.

---

## Como funciona?

O Snipet se conecta à fonte de conhecimento através de uma **camada de comunicação**, responsável por sincronizar ou receber mudanças.

Existem dois modos principais:

---

### 🔄 Pull (ativo)

No modo **pull**, o Snipet busca os dados periodicamente.

**Como funciona:**

1. O Snipet se conecta à fonte
2. Realiza uma varredura (full ou incremental)
3. Detecta mudanças nos fragmentos

**Ações:**

- **Novo ou atualizado** → executa o [pipeline de embedding](embedding-pipeline.md)
- **Removido** → remove do índice do Snipet

**Quando usar:**

- fontes sem suporte a eventos
- sistemas legados
- sincronização simples e previsível

---

### 📡 Push (reativo)

No modo **push**, a própria fonte notifica o Snipet quando algo muda.

**Como funciona:**

- a fonte envia eventos (webhook, WebSocket, fila, etc.)
- o Snipet reage às mudanças em tempo real

**Ações:**

- **Criação/atualização** → executa o [pipeline de embedding](embedding-pipeline.md)
- **Remoção** → remove o fragmento

**Quando usar:**

- sistemas event-driven
- necessidade de baixa latência
- dados que mudam frequentemente

---

## MCP (Model Context Protocol)

Fontes baseadas em MCP funcionam de forma diferente.

- **não utilizam pipeline de embedding**
- **não armazenam dados localmente**
- os dados são obtidos **em tempo de execução**

Isso significa que:

- não há indexação prévia
- a leitura acontece sob demanda
- ideal para dados dinâmicos ou sensíveis ao tempo

---

## Resumo

- Knowledge Source = **origem dos dados**
- Fragmento = **unidade mínima de informação**
- Pull = **Snipet busca os dados**
- Push = **fonte envia mudanças**
- MCP = **dados sob demanda, sem embedding**
