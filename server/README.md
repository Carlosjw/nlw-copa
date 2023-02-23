## Intalando o typescript
```bash
    # Instalando como dependência de desenvolvimento
    npm i typescript -D
```

## Criando arquivo de configuração typescript
```bash
    # cria o aqruivo `tsconfig.json`
    npx tsc --init
```
 * Alterar linha `"target":"es2016", para "es2020", pois o Node já suporta as novidades do Javascript

## Instalando o `fastify`
```bash
    # Instalando com ouma dependência de produção
    npm i fastify
```

## Inslando a biblioteca TSX: automatiza o processo de conversão do código typescript para javascript
```bash
    # como dependência de desenvolvimento
    npm i tsx -D
```
* Adiconar no `package.json`:
<!-- Caminho que irá executar o arquivo servidor typescript -->
```json
    "scripts":{
        "dev":"tsx src/server.ts"
    }
```

## Instalando o Prisma
```bash
    # Instalando como uma dependência de desenvolvimento
    npm i prisma -D # cria um sistema de linha de comando (CLI)

    # instalando prisma-client com dependência de produção
    npm i @prisma/client # utilizado para conectar no banco de dados

    # configurando o prima para uso do banco de dados SQlite
    npx prisma init --datasource-provider SQLite
```
    * Instalar extensão `Prisma` no VSCode para reconhecimento da sintaxe do Prisma, etc...