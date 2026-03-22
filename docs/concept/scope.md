---
sidebar_position: 4
---

# Scope

O **Scope** é um espaço de armazenamento de contexto **compartilhado e persistente**, utilizado para manter informações relevantes entre execuções.

Ele pode armazenar:

- preferências do usuário
- estado de sessões
- dados reutilizáveis
- memória de longo prazo

---

## Para que serve?

O Scope permite:

- manter consistência entre múltiplos Snipets
- evitar repetição de informações
- compartilhar contexto entre execuções diferentes
- armazenar memória além do ciclo de vida de um Snipet

---

## Como funciona

O Scope armazena dados de forma **versionada ao longo do tempo**, permitindo:

- recuperar estados anteriores
- realizar consultas temporais
- auditar mudanças
- entender evolução do contexto

> Nenhuma execução escreve diretamente no escopo, todas as alterações passam por um gerenciador de contexto.

---

## Controle de escrita

Nem todo Snipet pode modificar o Scope.

É possível definir **quais Snipets têm permissão para escrever no Scope**, garantindo:

- maior controle sobre o estado global
- isolamento entre execuções
- prevenção de alterações indevidas ou acidentais

Esse controle é especialmente importante em cenários com múltiplos Snipets compartilhando o mesmo escopo.

---

## Tipos de Scope

O comportamento do Scope pode variar de acordo com sua configuração:

### 🔄 Volátil

O Scope **pode ser alterado durante a execução** de um Snipet (desde que ele tenha permissão de escrita).

**Uso comum:**

- estado dinâmico
- dados que evoluem frequentemente
- memória de curto/médio prazo

---

### 🔒 Estático

O Scope **não pode ser alterado durante a execução**.

Ele só pode ser modificado **externamente (manual ou via configuração)**.

**Uso comum:**

- configurações fixas
- regras de negócio
- dados de referência

---

## Exemplos

- perfil do usuário
- preferências de linguagem
- configurações da aplicação
- histórico global
- memória persistente de interações

---

## Resumo

- Scope = **memória compartilhada e persistente**
- Versionado ao longo do tempo
- Utilizado entre múltiplos Snipets
- Controle de escrita por Snipet
- Pode ser:
  - Volátil (mutável em runtime)
  - Estático (imutável em runtime)
