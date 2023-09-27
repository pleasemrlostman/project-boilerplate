# Project Boilerplate

React-hook-form, Tailwindcss, React-query(tanstack-query)를 이용해서 제작한 보일러플레이트
회사내의 프로젝트를 빠르게 수행하기 위해 해당 보일러플레이트를 이용하여 작업을 실시

## 디렉토리 구조

```
project-boilerplate
├─ .eslintrc.cjs
├─ .gitignore
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ .gitignore
│     └─ husky.sh
├─ .prettierrc.json
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ fonts
│  │  ├─ icons
│  │  └─ logos
│  ├─ common
│  │  ├─ api
│  │  ├─ components
│  │  │  ├─ button
│  │  │  │  └─ index.tsx
│  │  │  ├─ checkbox
│  │  │  │  └─ index.tsx
│  │  │  ├─ radio
│  │  │  │  └─ index.tsx
│  │  │  ├─ text
│  │  │  │  └─ index.tsx
│  │  │  └─ textarea
│  │  ├─ hooks
│  │  ├─ query
│  │  │  └─ client.ts
│  │  ├─ types
│  │  └─ utils
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  └─ dev
│  ├─ routes
│  │  ├─ dev.tsx
│  │  └─ index.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## 특징

- 각 Input 컴포넌트들은 필수적으로 React-hook-form과 함께 사용해야한다
- route 구조를 중심으로 pages 폴더가 생성된다

## 폴더설명

### pages 폴더는 routes 파일을 기준으로 각각의 폴더가 생성된다 해당 폴더의 index.tsx 파일은 라우팅에 매칭된다

- api

* axios 통신을 담당하는 함수들을 작성

- components

* 실제 화면을 그리는 components들을 작성한다 만약 각각 폴더에서 공통되는 component가 존재한다면 src/common/componets 폴더로 이동

- hooks

* 필요한 custom hooks를 작성한다, 마찬가지로 2번이상 반복되는 custom hooks은 src/common/hooks 폴더로 이동

- query

* react-query(tanstack-query)에 필요한 KEY, URL 값을 객체 또는 string 형식으로 저장해둔다

- types

* 해당 route에 필요한 d.ts파일을 모아둔다

- utils

* 해당 route에 필요한 util 함수들을 작성
