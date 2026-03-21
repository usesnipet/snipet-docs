---
sidebar_position: 3
---

# Pipeline de Embedding

É o responsavel por definir como os fragmentos vindos da [fonte de conhecimento](knowledge-source.md), são [separados](#separador-splitter), [pre processados](#pre-processador), [incorporados](#embedder) e [salvos](#indexador)
Cada um desses passos tem uma configuração unica, definida na hora de criação da pipeline

:::warning
Ao criar um pipeline de embedding ele **NÃO** pode ser alterado, ele pode ser apenas depreciado (descontinuado).
:::

---

## Separador
Os fragmentos podem ser arquivos inteiros, ou conteudos muito grandes, então é necessario fazer uma separação em pedaços menores, e esse é o responsavel por essa separação. A configuração do separador é feita de acordo com o provider escolhido:
- [langchain](https://www.langchain.com/)
- [unstructured](https://unstructured.io/)
- outros

:::tip
O provider padrão é o [langchain](https://www.langchain.com/)
:::

---
## Pre processador
Apos a separação em pedacos (chunks), ocorre o pre processamento dos dados, onde eles são formatados para serem posteriormente indexados, os pre processadores disponiveis são:

### 1. ASCII
<details>
Converte todos os caracteres do texto para o conjunto de caracteres ASCII. Isso é útil para remover acentuação e caracteres especiais, uniformizando o texto para processos posteriores.<br/>
**Exemplo:**
```
Entrada: "Olá, cómo está você?"
Saída:  "Ola, como esta voce?"
```
</details>

### 2. RemoveNewlines
<details>
Remove todas as quebras de linha (`\n`) do texto, transformando-o em uma única linha contínua<br/>

**Exemplo:**
```
Entrada: "Primeira linha\nSegunda linha"
Saída:  "Primeira linhaSegunda linha"
```
</details>

### 3. RemoveWhitespace
<details>
Remove todos os espaços em branco do texto, incluindo espaços simples, tabs e quebras de linha.<br/>
**Exemplo:**
```
Entrada: "Exemplo   de texto \n com   espaços."
Saída:  "Exemplodetextocomespaços."
```
</details>

### 4. Trim
<details>
Remove espaços em branco do início e do fim do texto, mas preserva os espaços internos.<br/>
**Exemplo:**
```
Entrada: "   Texto com espaços.   "
Saída:  "Texto com espaços."
```
</details>

### 5. LowerCase
<details>
Converte todo o texto para letras minúsculas, facilitando comparações e buscas insensíveis a maiúsculas/minúsculas.<br/>
**Exemplo:**
```
Entrada: "Exemplo De Texto"
Saída:  "exemplo de texto"
```
</details>

### 6. UpperCase
<details>
Converte todo o texto para letras maiúsculas.<br/>
**Exemplo:**
```
Entrada: "Exemplo De Texto"
Saída:  "EXEMPLO DE TEXTO"
```
</details>

:::tip
Os pre processadores são aplicados em ordem, ou seja, o resultado do pre processador 1 é o input do pre processador 2, e assim por diante.
:::

---

## Embedder
O embedder é o responsavel por incorporar os dados pre processados, ele é responsavel por criar os embeddings dos dados, para que eles possam ser buscados posteriormente. Esse processo é feito com LLMs.

Entre as opções disponiveis, temos as seguintes:
- [OpenAI](https://openai.com/)
- [Anthropic](https://www.anthropic.com/)
- [Google](https://cloud.google.com/vertex-ai)
- [Cohere](https://cohere.com/)
- [Groq](https://groq.com/)
- [Mistral](https://mistral.ai/)
- [Ollama](https://ollama.com/)
- [OpenRouter](https://openrouter.ai/)

## Indexador
O indexador é o responsavel por armazenar os dados incorporados, ele é responsavel por criar o indice dos dados, para que eles possam ser buscados posteriormente.

O Snipet utiliza o PostgreSQL com a extensão pgvector para armazenar os dados incorporados.

:::tip
Cada modelo de incorporação tem um tamanho de embedding diferente, e o Snipet utiliza o tamanho de embedding do modelo para armazenar os dados incorporados, por isso os dados incorporados são armazenados em uma tabela separada para cada modelo de incorporação.
:::