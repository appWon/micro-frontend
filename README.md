# ๐ ํ๋ก์ ํธ ๊ตฌ์กฐ

![Untitled Diagram drawio](https://user-images.githubusercontent.com/96896468/178406406-e847ce0b-c6d6-404a-b907-b833e901e07a.png)

## `yarn v2` ์ Plug'n'Play( `pnp` )

yarn version 2 ๋ถํฐ ๋์จ Plug'n'Play ์ ๋ต์ npm์ `node_modules`ํ์์ด ์๋ `pnp` ํ์ผ์ ๋ช์์ ์ผ๋ก ์์น๋ฅผ ์๋ ฅํ์ฌ ํจ์จ์ ์ผ๋ก ์์กด์ฑ ๋ชจ๋์ ๊ฒ์ํ ์์๊ณ , npm ๊ฐ์ด ์ค์น ํ์ง ์์ ํจํค์ง ๋ชจ๋์ด ์ค์น๋ ํจํค์ง ๋ชจ๋ ์๋์ ์๋ค๋ฉด `import`ํด์ ์ฌ์ฉํ  ์ ์๋ `์ ๋ น ์์กด์ฑ`์ ์ ๊ฑฐํ์ฌ ํผ๋์ ์์ด๋ค.

```
  ["react", [\
        ["npm:18.2.0", {\
          "packageLocation": "./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/",\ <- ์์กด์ฑ ์์น ๋ช์
          "packageDependencies": [\
            ["react", "npm:18.2.0"],\
            ["loose-envify", "npm:1.4.0"]\
          ],\
          "linkType": "HARD"\
        }]\
  ]],\
```

## ZipFS

yarn v2 pnp ์ ๋ต์ ์ฌ์ฉํ๋ฉด .yarn/cache/~.zip ์์น์ `zip` ํ์ผ๋ก ๊ด๋ฆฌํ๊ธฐ ๋๋ฌธ์ ์์กด์ฑ๋ค์ ๊ธฐ์กด๋ณด๋ค ์์ ์ฉ๋์ผ๋ก ๊ฐ์ง๊ณ  ์์ ์ ์์ด `github` ๊ฐ์ ์ ์ฅ์์ ์์กด์ฑ์ ๊ฐ์ด ์ฌ๋ ค๋์ด ๋ฐฐํฌ์ ์์กด์ฑ ์ค์น๋ฅผ ์๋ตํ์ฌ ๋ฐฐํฌ์๊ฐ์ ์ค์ผ์ ์๋ค.

<img width="947" alt="แแณแแณแแตแซแแฃแบ 2022-07-12 แแฉแแฎ 2 41 24" src="https://user-images.githubusercontent.com/96896468/178416996-cc92cc76-6540-4949-a085-9e6f434a242f.png">

<img width="721" alt="แแณแแณแแตแซแแฃแบ 2022-07-12 แแฉแแฎ 2 42 01" src="https://user-images.githubusercontent.com/96896468/178417076-764975af-5039-40ef-951d-8b7dcc6597f2.png">

<img width="716" alt="แแณแแณแแตแซแแฃแบ 2022-07-12 แแฉแแฎ 2 42 22" src="https://user-images.githubusercontent.com/96896468/178417128-ccc67c5d-72e4-4e78-8edd-9ad30f1610e4.png">

vscode๋ก ์ฝ๋๋ฅผ ์์ฑ์ zip ์ผ๋ก ๊ด๋ฆฌํ๊ณ  ์์ด ์์กด์ฑ์ ์ฝ์์ ์๋๋ก [ZipFS extension](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)์ ์ค์น ํ `yarn dlx @yarnpkg/sdks vscode` ์๋ ฅํ๋ฉด `.vscode` ํ์ผ์ด ์ค์น๋๋ฉฐ ์์กด์ฑ ์ธ์์ ํ  ์ ์๋ค.

## mono-repo (yarn - workspace)

๋ชจ๋ธ๋ ํฌ๋ ํ๋์ ์ ์ฅ์์ ์ฌ๋ฌ ์๋น์ค๋ค์ ๊ด๋ฆฌํ๊ณ  ์์กด์ฑ์ ๊ณต์ ํ์ฌ ๊ฐ๋ฐํ๋ ์ ๋ต์๋๋ค. yarn v2 workspace๋ฅผ ํ์ฉํ๋ค๋ฉด ๋ ํ์งํ ๋ฆฌ๋ฅผ ํด๋ก ํ์์ ๊ฒฝ์ฐ ์์กด์ฑ ์ค์น๋ฅผ ์๋ตํ  ์ ์๋ [zeroInstall](https://yarnpkg.com/features/zero-installs) ์ ๋ต์ ์ฌ์ฉํ  ์ ์๋ค.
๋ฟ๋ง์๋๋ผ ๋ชจ๋ธ๋ ํฌ๋ฅผ ํ์ฉํ๋ค๋ฉด `๊ณตํต ํญ๋ชฉ(์ปดํฌ๋ํธ, ์คํ์ผ, ์ธํ)`์ ๊ณต์ ํ์ฌ ์ข๋ ์ฒด๊ณ์ ์ธ ๊ฐ๋ฐ์ ํ ์ ์๋ค.

![_แแฎแแฉ แแกแแตแแฅแแณแแขแท drawio](https://user-images.githubusercontent.com/96896468/178422858-db545dc9-0d59-409d-817f-c9c6fecc4340.png)

### workspace-tool plugin

```
// yarn workspace-tool ์ค์น

yarn plugin import workspace-tools
```

workspace-tools ํ๋ฌ๊ทธ์ธ์ ์ค์นํ๋ ์ด์ ๋ `foreach`๋ผ๋ ๊ธฐ๋ฅ์ ์ฌ์ฉํ๊ธฐ ์ํด์ ์ค์น๋ฅผ ํ์๋ค. ์ด ๊ธฐ๋ฅ์ ์๋ฐ์คํฌ๋ฆฝํธ์ `foreach` ๊ฐ์ ๊ฐ๋์ผ๋ก ์ค์ ํ workspace์ ๋ํด ๋ช๋ น์ด๋ฅผ ์คํ์ํ๊ฒ ํด์ฃผ๊ณ , `--since` ๋ผ๋ ์ต์์ผ๋ก ์ฐธ์กฐ ๋ธ๋์น ๊ธฐ์ค `๋ณ๊ฒฝ๋ ์ฝ๋๊ฐ ์๋ workspace๋ง` ๋ช๋ น์ด๋ฅผ ์คํํ๊ฒ ํ  ์ ์๋ค.

#### ์ฃผ์โ๏ธ - foreach์ --since ์ต์์ ์ฌ์ฉํ  ๊ฒฝ์ฐ git-flow ์ ๋ต์ ๋ฌด์๋ณด๋ค ์ ์ด์ฉํด์ผํ๋ค.

![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/46001535/179459904-b9ec5c57-3d0e-49ac-99e7-c7b29741944e.png)

# โ๏ธwebpack5 module Federation

์นํฉ5 ๋ถํฐ ๋ด์ฅ๊ธฐ๋ฅ์ผ๋ก ์ถ๊ฐ๋ federation ๊ธฐ์ ์ ์ง๊ธ ๊ตฌํํ ๋ง์ดํฌ๋ก ํ๋ก ํธ ํ๋ก์ ํธ์์ `๊ฐ์ฅ ์ค์ํ ๋ถ๋ถ`์ด๋ค. Federation์ `runtime`์ ๊ณต์ ํ ์๋น์ค๋ก ๋ถํฐ ์ฝ๋(chunk file)์ ์ข์์ฑ(dependency)์ ๋์ ์ผ๋ก ์ฌ์ฉํ๊ฑฐ๋ ๋ค์ ๊ณต์ ํ  ์ ์๋ค.

### Federation config options

> - name : service ์ด๋ฆ
> - filename : ๋ด๋ณด๋ผ ํ์ผ ์ด๋ฆ
> - exposes : ๊ณต์ ํ  ์์
> - remotes : ๊ณต์  ๋ฐ์ ์๋น์ค ์ฃผ์
> - shared : ๊ณต์ ํ  ์์์ด ์์ ๊ฒฝ์ฐ! ์ข์์ฑ ๊ณต์ 
>   > `shared options`
>   >
>   > - singleton : ์ฌ๋ฌ ํจํค์ง ๋ฒ์ ์ด ๊ณต์ ๊ฐ ๋์ด์๋ค๋ฉด ํ๋์ ๋ฒ์ ์์๋ง ๋ก๋๊ฐ ๋๋ค, ์ฆ ์ค์ ํ ๋ฒ์ ์์๋ง ๋ก๋๊ฐ ๋๋ค
>   > - requiredVersion : ์๋น์ค์์ ์ฌ์ฉํ๋ ์ข์์ฑ ํจํค์ง ๋ฒ์ ์ ๋ํ๋ธ๋ค.
>   > - eager : true๋ก ์ฌ์ฉํ๋ฉด load๊ฐ ๋์ง ์์๋๋ ํญ์ ๋ด๋ ค๋ฐ๊ฒ ๋๋ค.

## - exposes

exposes ์ต์์ ์๋น์ค์ `component, style, assets` ๋ฑ... ์๋น์ค ์์? ์ ๊ณต์ ํ๊ธฐ ์ํ ๊ฐ์ฅ ์ค์ํ ๋ถ๋ถ์ด๋ค.

```
// service1/webpack.config.js

const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

plugins: [
  new ModuleFederationPlugin({
    name: "service1",
    filename: "remoteEntry.js",
    exposes: {
      "./App": "./src/App.tsx",
    },
    shared: {
      ...deps,
      react: {
        eager: true,
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        eager: true,
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    }
  })
]
```

## - remotes

remotes ์ต์์ ๊ณต์ ํ ์๋น์ค์ ์ฐ๊ฒฐ์ ํ๊ธฐ ์ํด ์ฌ์ฉํ๋ค.

```
// container/webpack.config.js

plugins: [
  new ModuleFederationPlugin({
    name: "container",
    remotes: {
      remote_service1: "service1@http://localhost:port/remoteEntry.js",
    },
  })
]
```

```
// container/src/App.tsx
import React from 'react'

const ServiceApp = React.lazy(()=> import('remote_service1/App'))


function App() {
  return (
    <div>
      {
        <React.Suspense fallback={<div>๋ก๋ฉ์ค</div>}>
          <ServiceApp />
        </React.Suspense>
      }
    </div>
  )
}

export default App
```

# ๐ฅ ๋ฐฐํฌ์ ๋ต

์ง๊ธ ๋ฐฐํฌ ๋ฐฉ๋ฒ์ ๊ฐ์ธ์ ์ธ ์๊ฐ์ ๋ด์ ๋ฐฐํฌ ๋ฐฉ๋ฒ์ด๋ค.

> ๐ yarn pnp ์ ๋ต์ ์ฌ์ฉํ๋ฉด ๋ ํ์งํ ๋ฆฌ์ ๋ชจ๋  ์ข์์ฑ๋ค์ ๊ฐ์ง๊ณ  ์์ด, docker container์์ build๋ฅผ ์งํํ๋ `docker multi stage build` ๋ฐฉ๋ฒ์ ์ฌ์ฉํ์ง ์๊ณ , ํ๋ก์ ํธ์์ build ํ dist ํด๋๋ฅผ `VOLUMES`๋ก ๊ณต์  ํ๋ค๋ฉด, ์ฝ๋์ ๋ณ๊ฒฝ์ด ์๋๋ผ๋ ์ด๋ฏธ์ง๋ฅผ ๋ค์ ๋ง๋ค์ง ์๊ณ  ๋ฐ๋ก ์คํํ  ์ ์์ด ์๊ฐ ๋ญ๋น๋ฅผ ์ต์ํ ํ  ์ ์๋ค.
