---
sidebar_position: 3
---

# Knowledge Base

Uma **Knowledge Base** é um agrupamento lógico de [Knowledge Sources](knowledge-source.md).

Ela permite organizar diferentes fontes que possuem **relação entre si**, facilitando a busca, o contexto e a recuperação de informação.

> A base de conhecimento não armazena dados diretamente — ela apenas **organiza e agrupa fontes**.

---

## Para que serve?

- agrupar fontes relacionadas
- melhorar a relevância na busca (RAG)
- separar contextos por domínio (ex: vendas, suporte, engenharia)
- permitir reutilização entre múltiplos Snipets

---

## Como funciona

Uma Knowledge Base pode conter múltiplas Knowledge Sources, e uma mesma Knowledge Source pode, ser utilizada em mais de uma Knowledge Base.

Durante a execução, o Snipet consulta a Knowledge Base para recuperar dados relevantes, que serão usados como contexto.

---

## Exemplo

### Knowledge Sources

- GitHub
- GitHub Issues
- Notion
- Slack
- Email
- Google Drive
- Zendesk
- CRM

---

### Knowledge Bases

- **Desenvolvimento**
  - GitHub
  - GitHub Issues
  - Slack (canal de desenvolvimento)

- **Marketing**
  - Notion
  - Email (campanhas)

- **Vendas**
  - CRM
  - Email (leads)

- **Suporte**
  - Zendesk
  - Email (tickets)

---

## Boas práticas

- agrupe fontes por **domínio de negócio**, não por tipo técnico
  (ex: “Suporte” ao invés de “APIs”)

- evite bases muito grandes e genéricas
  → isso reduz a qualidade da recuperação

- prefira bases menores e mais específicas
  → melhora a precisão do contexto

---

## Resumo

- Knowledge Base = **agrupamento lógico de fontes**
- organiza o acesso ao conhecimento
- melhora a busca e o contexto
- não armazena dados diretamente
