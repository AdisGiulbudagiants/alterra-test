# Установка и запуск проекта

### Шаг 1: Настройка базы данных PostgreSQL

1. Создайте базу данных с названием `alterra-test`
2. Настройте файл `.env` в папке server со следующими параметрами:

```env
PORT = 3000

DB_USER = postgres
DB_PASSWORD = 123456
DB_HOST = localhost  
DB_PORT = 5432
DB_NAME = alterra-test
```
```DB_USER``` и ```DB_PASSWORD``` вставьте свои, если они отличаются
   

Откройте терминал и выполните следующие команды:

```bash
cd server
npm install
npm start
```

### Шаг 2: Запуск сервера

Откройте терминал и выполните следующие команды:

```bash
cd server
npm install
npm start
```
### Шаг 3: Запуск клиента

```bash
cd client
npm install
npm run build
npm run preview
```
