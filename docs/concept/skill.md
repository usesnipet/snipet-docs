---
sidebar_position: 6
---

# Skill

Uma **Skill** representa uma **ação que pode ser executada pelo Snipet**.

Diferente das fontes de conhecimento, que são usadas para **leitura**, as skills são usadas para **causar efeitos no mundo externo**.

---

## 🧠 O que é uma Skill?

Uma Skill é uma capacidade de execução, como:

- criar um ticket
- enviar uma mensagem
- atualizar um banco de dados
- chamar uma API
- executar um processo externo

> Se envolve **efeito colateral**, é uma Skill.

---

## 🔹 Características

- **Executa ações externas**
- Pode ou não utilizar modelos de IA
- Possui **permissões explícitas**
- Pode gerar efeitos irreversíveis
- É parte do fluxo de execução

---

## 🔗 Skill vs Knowledge Source

É fundamental entender essa diferença:

- **Knowledge Source**
  - leitura de dados
  - sem efeito colateral

- **Skill**
  - execução de ações
  - com efeito colateral

---

## ⚙️ Como funciona

Durante a execução de um Snipet:

1. O input é processado
2. A intenção é resolvida
3. O contexto é recuperado
4. O sistema decide se uma ou mais Skills devem ser executadas
5. As Skills são chamadas com os parâmetros necessários

```

Input
→ Intent Resolver
→ Contexto
→ Decisão
→ Skill(s)
→ Output

```

---

## 🔐 Permissões e controle

Skills são controladas por políticas e permissões.

É possível definir:

- quais skills podem ser usadas
- em quais contextos
- por quais Snipets
- com quais limites

Isso garante:

- segurança
- previsibilidade
- controle de efeitos colaterais

---

## 🧩 Integração com o Snipet

As Skills fazem parte do processo de execução e podem:

- usar contexto do Snipet
- acessar dados do Scope (se permitido)
- depender de dados de Knowledge Base
- gerar novos outputs

---

## 🎯 Exemplos

- criar issue no GitHub
- enviar mensagem no Slack
- atualizar um registro no banco
- disparar webhook
- executar automação interna

---

## 🧠 Filosofia

No Snipet:

- leitura é separada de execução
- contexto é controlado
- ações são explícitas

Skills existem para tornar o sistema **capaz de agir**, não apenas responder.

---

## 📌 Resumo

- Skill = **ação com efeito colateral**
- executa operações externas
- controlada por permissões
- parte do fluxo de execução
- diferente de Knowledge Source (leitura)
