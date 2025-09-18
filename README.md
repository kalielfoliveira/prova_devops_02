# API Cardápio

## Sumário

- [Tema e Grupo](#tema-e-grupo)
- [Requisitos](#requisitos)
- [Como Executar (Docker Compose)](#como-executar-docker-compose)
- [Endpoints da API](#endpoints-da-api)
- [CRUD - Exemplos de Uso](#crud---exemplos-de-uso)
- [Exemplos de Resposta](#exemplos-de-resposta)
- [Derrubando e Limpando os Recursos](#derrubando-e-limpando-os-recursos)
- [Swagger](#swagger)

---

## Tema e Grupo

**Tema:** Itens de Cardápio  
**Tabela:** Items  
**Campos:**
- id
- name
- category
- price
- vegetarian

**Grupo do trabalho:**  
Anderson Rodrigues Fernandes, João Vicente Locks, Kaliel Furlaneto Oliveira.

---

## Requisitos

- Docker e Docker Compose instalados
- Node.js (apenas para desenvolvimento local, não necessário para execução via Compose)
- Portas 3000 (frontend), 3005 (API) e 5433 (PostgreSQL) livres

---

## Como Executar (Docker Compose)

1. **Clone o repositório e acesse a pasta do projeto:**
   ```sh
   git clone <url-do-repositorio>
   cd <pasta-do-projeto>/deploy
   ```

2. **Suba todos os serviços (PostgreSQL, API NestJS, Frontend React) com um único comando:**
   ```sh
   docker compose up --build
   ```

   - O frontend estará disponível em: [http://localhost:3000](http://localhost:3000)
   - A API estará disponível em: [http://localhost:3005](http://localhost:3005)
   - O Swagger estará em: [http://localhost:3005/api](http://localhost:3005/api)

---

## Endpoints da API

- **POST** `/items` — Criar item
- **GET** `/items` — Listar todos os itens
- **GET** `/items/{id}` — Buscar item por ID
- **PUT** `/items/{id}` — Atualizar item
- **DELETE** `/items/{id}` — Remover item

---

## CRUD - Exemplos de Uso

### Criar Item

**POST** `/items`  
Body:
```json
{
  "name": "Pizza",
  "category": "Lanche",
  "price": 35.00,
  "vegetarion": true
}
```

### Listar Itens

**GET** `/items`

### Buscar Item por ID

**GET** `/items/1`

### Atualizar Item

**PUT** `/items/1`  
Body:
```json
{
  "name": "Pizza Vegetariana",
  "category": "Lanche",
  "price": 38.00,
  "vegetarion": true
}
```

### Remover Item

**DELETE** `/items/1`

---

## Exemplos de Resposta

### Resposta de Listagem (`GET /items`)

```json
[
  {
    "id": 1,
    "name": "Pizza",
    "category": "Lanche",
    "price": 35.00,
    "vegetarion": true
  }
]
```

### Resposta de Criação (`POST /items`)

```json
{
  "id": 2,
  "name": "Hambúrguer",
  "category": "Lanche",
  "price": 25.00,
  "vegetarion": false
}
```

---

## Derrubando e Limpando os Recursos

Para parar e remover todos os containers, redes e volumes criados pelo Compose, execute:

```sh
docker compose down -v
```

- O parâmetro `-v` remove também os volumes, apagando os dados do banco.

---

## Swagger

Acesse a documentação e teste a API via Swagger em:
[http://localhost:3005/api](http://localhost:3005/api)