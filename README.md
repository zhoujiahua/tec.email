# TypeScript Bacisc

```
mkdir tscapp
cd tscapp
npm init --yes
```

# TypeScript Config

```
npm install -g typescript

npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install -g typescript

tsc --init

# 帮助引入包识别声明
npm install -g @types/node

```

# Express install

```
npm install express
npm install @types/express -D

```

# Tools run project

```
npm install -g nodemon
```

```
# 多文件合并
tsc --outfile  app.js other.ts ....
tsc app.ts --outFile app.js
```

```
cnpm i express mongoose body-parser bcryptjs jsonwebtoken morgan cors validator helmet dotenv multer http-status-codes -S

cnpm i typescript  @types/node @types/express @types/mongoose @types/bcryptjs @types/jsonwebtoken  @types/morgan @types/cors @types/validator ts-node-dev @types/helmet @types/multer -D
```

```
  "scripts": {
    "build": "tsc",
    "start": "ts-node-dev --respawn app.ts"
  },

# 除了用ts-node-dev，还可以使用nodemon --exec ts-node --files app.ts 执行
npm install -g ts-node
npm config get prefix

```
