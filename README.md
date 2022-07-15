# 👉 프로젝트 구조

![Untitled Diagram drawio](https://user-images.githubusercontent.com/96896468/178406406-e847ce0b-c6d6-404a-b907-b833e901e07a.png)

## `yarn v2` 의 Plug'n'Play( `pnp` )

yarn version 2 부터 나온 Plug'n'Play 전략은 npm의 `node_modules`탐색이 아닌 `pnp` 파일에 명시적으로 위치를 입력하여 효율적으로 의존성 모듈을 검색할수있고, npm 같이 설치 하지 않은 패키지 모듈이 설치된 패키지 모듈 아래에 있다면 `import`해서 사용할 수 있는 `유령 의존성`을 제거하여 혼란을 없앴다.

```
  ["react", [\
        ["npm:18.2.0", {\
          "packageLocation": "./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/",\ <- 의존성 위치 명시
          "packageDependencies": [\
            ["react", "npm:18.2.0"],\
            ["loose-envify", "npm:1.4.0"]\
          ],\
          "linkType": "HARD"\
        }]\
  ]],\
```

## ZipFS

yarn v2 pnp 전략을 사용하면 .yarn/cache/~.zip 위치에 `zip` 파일로 관리하기 때문에 의존성들의 기존보다 작은 용량으로 가지고 있을 수 있어 `github` 같은 저장소에 의존성을 같이 올려두어 배포시 의존성 설치를 생략하여 배포시간을 줄일수 있다.

<img width="947" alt="스크린샷 2022-07-12 오후 2 41 24" src="https://user-images.githubusercontent.com/96896468/178416996-cc92cc76-6540-4949-a085-9e6f434a242f.png">

<img width="721" alt="스크린샷 2022-07-12 오후 2 42 01" src="https://user-images.githubusercontent.com/96896468/178417076-764975af-5039-40ef-951d-8b7dcc6597f2.png">

<img width="716" alt="스크린샷 2022-07-12 오후 2 42 22" src="https://user-images.githubusercontent.com/96896468/178417128-ccc67c5d-72e4-4e78-8edd-9ad30f1610e4.png">

vscode로 코드를 작성시 zip 으로 관리하고 있어 의존성을 읽을수 있도록 [ZipFS extension](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)을 설치 후 `yarn dlx @yarnpkg/sdks vscode` 입력하면 `.vscode` 파일이 설치되며 의존성 인식을 할 수 있다.

## mono-repo (yarn - workspace)

모노레포는 하나의 저장소에 여러 서비스들을 관리하고 의존성을 공유하여 개발하는 전략입니다. yarn v2 workspace를 활용한다면 레파지토리를 클론하였을 경우 의존성 설치를 생략할 수 있는 [zeroInstall](https://yarnpkg.com/features/zero-installs) 전략을 사용할 수 있다.
뿐만아니라 모노레포를 활용한다면 `공통 항목(컴포넌트, 스타일, 세팅)`을 공유하여 좀더 체계적인 개발을 할수 있다.

![_구조 다이어그램 drawio](https://user-images.githubusercontent.com/96896468/178422858-db545dc9-0d59-409d-817f-c9c6fecc4340.png)

### workspace-tool plugin

```
// yarn workspace-tool 설치

yarn plugin import workspace-tools
```

workspace-tools 플러그인을 설치하는 이유는 `foreach`라는 기능을 사용하기 위해서 설치를 하였다. 이 기능은 자바스크립트의 `foreach` 같은 개념으로 설정한 workspace에 대해 명령어를 실행을하게 해주고, `--since` 라는 옵션으로 참조 브랜치 기준 `변경된 코드가 있는 workspace만` 명령어를 실행하게 할 수 있다.

# ❗️webpack5 module Federation

웹팩5 부터 내장기능으로 추가된 federation 기술은 지금 구현한 마이크로 프론트 프로젝트에서 `가장 중요한 부분`이다. Federation은 `runtime`시 공유한 서비스로 부터 코드(chunk file)와 종속성(dependency)을 동적으로 사용하거나 다시 공유할 수 있다.

### Federation config options

> - name : service 이름
> - filename : 내보낼 파일 이름
> - exposes : 공유할 자원
> - remotes : 공유 받을 서비스 주소
> - shared : 공유할 자원이 있을 경우! 종속성 공유
>   > `shared options`
>   >
>   > - singleton : 여러 패키지 버전이 공유가 되어있다면 하나의 버전에서만 로드가 된다, 즉 설정한 버전에서만 로드가 된다
>   > - requiredVersion : 서비스에서 사용하는 종속성 패키지 버전을 나타낸다.
>   > - eager : true로 사용하면 load가 되지 않을때도 항상 내려받게 된다.

## - exposes

exposes 옵션은 서비스의 `component, style, assets` 등... 서비스 자원? 을 공유하기 위한 가장 중요한 부분이다.

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

remotes 옵션은 공유한 서비스와 연결을 하기 위해 사용한다.

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
        <React.Suspense fallback={<div>로딩중</div>}>
          <ServiceApp />
        </React.Suspense>
      }
    </div>
  )
}

export default App
```
