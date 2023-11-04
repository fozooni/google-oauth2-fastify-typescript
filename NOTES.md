# Server side notes

### Dependencies

```shell
yarn add fastify @fastify/oauth2 @fastify/cors
```

### Development Dependencies

```shell
yarn add -D @types/node tsx typescript
```

### Generate tsconfig file

```shell
npx tsc --init
```

### TSConfig.json file contents

```json
{
  "compilerOptions": {
    "target": "es2016",
    "experimentalDecorators": true,
    "module": "commonjs",
    "resolveJsonModule": true,
    "sourceMap": true,
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "strictPropertyInitialization": false,
    "skipLibCheck": true
  }
}
```

### Add this scripts into the package.json

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsx watch src/app.ts"
  }
}
```