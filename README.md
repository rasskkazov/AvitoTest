# Avito test. React typescript (VKUI)

## Launch instruction

```bash
git clone https://github.com/rasskkazov/AvitoTest.git
```

```bash
npm i
```

```bash
TOKEN=<your token> npm run start
```

## Docker

Для создания образа:

```bash
docker build -t avito-client .
```

Для запуска контейнера:

```bash
docker run -p <your port>:7070 -e TOKEN=<your token> avito-client
```
