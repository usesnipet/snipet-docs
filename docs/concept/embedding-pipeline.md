---
sidebar_position: 2
---

# Embedding Pipeline

O **Embedding Pipeline** define como os dados vindos de uma [Knowledge Source](knowledge-source.md) são transformados em representações vetoriais pesquisáveis.

Esse processo envolve quatro etapas principais:

1. **Carregamento + Particionamento**
2. **Pré-processamento**
3. **Geração de embeddings**
4. **Indexação**

Cada etapa possui uma configuração própria, definida no momento da criação do pipeline.

:::warning
Após criado, um pipeline de embedding é **imutável**.
Ele não pode ser alterado — apenas **depreciado (descontinuado)** e substituído por um novo.
:::

---

## 🔹 Fluxo geral

```

Fragmento
→ Carregamento + Particionamento
→ Pre-processadores
→ Embedder
→ Indexador

```

---

## Carregamento + Particionamento

Fragmentos podem ser grandes (ex: arquivos inteiros), então ele precisa ser carregado e depois dividido em partes menores (**chunks**).

O **Carregamento + Particionamento** é responsável por carregar os fragmentos e dividi-los em partes menores.

### Providers suportados:

- [langchain](https://www.langchain.com/)
- [unstructured](https://unstructured.io/)
- outros

:::tip
O provider padrão é o **LangChain**.
:::

### Objetivo

- melhorar a qualidade da busca semântica
- evitar estouro de contexto dos modelos
- aumentar precisão na recuperação de informações

---

## Pré-processamento

Após a separação, cada chunk passa por uma etapa de **pré-processamento**, onde o texto é normalizado antes da geração dos embeddings.

Os pré-processadores são aplicados **em sequência**, onde a saída de um é a entrada do próximo.

---

### 1. ASCII

Converte caracteres para o conjunto ASCII, removendo acentuação e caracteres especiais.

**Exemplo:**
```

Entrada: "Olá, cómo está você?"
Saída:  "Ola, como esta voce?"

```

---

### 2. RemoveNewlines

Remove quebras de linha (`\n`), transformando o texto em uma única linha.

**Exemplo:**
```

Entrada: "Primeira linha\nSegunda linha"
Saída:  "Primeira linha Segunda linha"

```

---

### 3. RemoveWhitespace

Remove todos os espaços em branco (incluindo tabs e quebras de linha).

**Exemplo:**
```

Entrada: "Exemplo   de texto \n com   espaços."
Saída:  "Exemplodetextocomespaços."

```

---

### 4. Trim

Remove espaços no início e no fim do texto.

**Exemplo:**
```

Entrada: "   Texto com espaços.   "
Saída:  "Texto com espaços."

```

---

### 5. LowerCase

Converte todo o texto para minúsculas.

**Exemplo:**
```

Entrada: "Exemplo De Texto"
Saída:  "exemplo de texto"

```

---

### 6. UpperCase

Converte todo o texto para maiúsculas.

**Exemplo:**
```

Entrada: "Exemplo De Texto"
Saída:  "EXEMPLO DE TEXTO"

```

---

## Geração de embeddings

O **gerador de embeddings** é responsável por transformar o texto em **vetores numéricos (embeddings)**.

Esses vetores capturam o significado semântico do conteúdo, permitindo buscas por similaridade.

Esse processo é feito utilizando modelos de embedding.

### Providers suportados:

- [OpenAI](https://openai.com/)
- [Anthropic](https://www.anthropic.com/)
- [Google Vertex AI](https://cloud.google.com/vertex-ai)
- [Cohere](https://cohere.com/)
- [Ollama](https://ollama.com/)
- [OpenRouter](https://openrouter.ai/)

---

## Indexação

O **indexador** é responsável por armazenar os embeddings e estruturar os dados para busca eficiente.

No Snipet:

- banco utilizado: **PostgreSQL**
- extensão: **pgvector**

### Como funciona

- cada chunk gera um embedding
- os embeddings são armazenados junto com seus metadados
- consultas utilizam similaridade vetorial

:::tip
Cada modelo de embedding possui uma dimensionalidade diferente.

Por isso, o Snipet cria **estruturas separadas por modelo**, garantindo compatibilidade e performance.
:::

---

## Resumo

- Pipeline = transformação de dados → vetores pesquisáveis
- Carregamento + Particionamento = carrega e divide dados em chunks
- Pré-processamento = normaliza texto
- Geração de embeddings = gera embeddings
- Indexação = armazena e permite busca