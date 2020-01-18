# Scripts:

### Rodar em desenvolvimento
    yarn dev

### Rodar para debug
    yarn dev:debug


# Docker:

  ### Buildar Postgres
    docker run --name pleez_db_postgres -e POSTGRES_PASSWORD=pleez_db_postgres -p 5432:5432 -d postgres:11

  ## Abrir imagem já criada
    docker start pleez_db_postgres

### Plugins para o editor de texto:
    - Eslint
    - EditorConfig

### Adicionar estas linhas no settings.json do Vscode para autofix ao salvar funcionar:

    "eslint.autoFixOnSave": true,
    "eslint.validate" : [
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "javascriptreact",
            "autoFix": true
        },
    ]

# :memo: Comandos:

### Corrigir todos os arquivos com eslint:

    yarn eslint --fix src --ext .js

# Comandos Postgres - Sequelize CLI:

### Criar migrations
    yarn sequelize migration:create --name=create-users
  'name' é o nome da migration

### Realizar migrate
    yarn sequelize db:migrate

### Desfazer a ultima migration
    yarn sequelize db:migrate:undo

### Desfazer todas as migrations
    yarn sequelize db:migrate:undo:all
