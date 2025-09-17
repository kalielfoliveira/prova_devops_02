# API Cardápio

## Endpoints

### Criar Item
POST /items  
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
GET /items

### Buscar Item por ID
GET /items/{id}

### Atualizar Item
PUT /items/{id}  
Body igual ao criar.

### Remover Item
DELETE /items/{id}

## Teste via Swagger

Acesse:  
[http://localhost:3005/api](http://localhost:3005/api)
