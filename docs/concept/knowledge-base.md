---
sidebar_position: 4
---

# Base de conhecimento

Uma **base de conhecimento** é um agrupamento lógico de [fontes de conhecimento](knowledge-source.md).

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

Uma base de conhecimento pode conter múltiplas fontes, e uma mesma fonte pode, ser utilizada em mais de uma base.

Durante a execução, o Snipet consulta a base de conhecimento para recuperar dados relevantes, que serão usados como contexto.

---

## Exemplo

### Fontes de conhecimento

- GitHub
- GitHub Issues
- Notion
- Slack
- Email
- Google Drive
- Zendesk
- CRM

---

### Bases de conhecimento

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
