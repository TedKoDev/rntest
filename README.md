## COIN PRICE CHECKER

```
목적 : COIN 가격차를 확인하는 인공지능 모델을 이용하기 위한 RN 앱 개발
개발자 : 홍태의 (RN,API), 신지원 (AI 모델링)
시작일 : 2023/11/26
```

## 1. 개발환경

```
- React Native
- Node.js (Express) (예정)
```

## 2. React Native 설치

### 1. react-native-rename 사용 https://github.com/junedomingo/react-native-rename

```
앱 이름 바꾸기

npx react-native-rename "Coin-App" -b "com.shinandted.coinapp"

해준 뒤에는 ios 폴더에서 pod install 해줘야함

```

### 2. React-native-Eslint 설치

setting up eslint-prettier-husky[https://deku.posstree.com/ko/react-native/eslint-prettier-husky-lint-staged/]

```
- Eslint : 코드의 품질을 검사하는 도구
yarn add eslint --dev

npx eslint --init


yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks

```

### 3. prettier 설치 위의 블로그 참고해서 진행

```
yarn add -D prettier eslint-plugin-prettier
```

### 4. husky 설치

```
  yarn add -D husky
  yarn add -D lint-staged

```

### 5. react-native-magnus 설치 https://github.com/jsartisan/react-native-magnus

```
UI 프레임워크 설치

yarn add react-native-magnus
yarn add react-native-animatable react-native-modal react-native-vector-icons

```

### 6. react-navigation 설치 https://reactnavigation.org/docs/getting-started

```
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/drawer
yarn add @react-navigation/material-top-tabs
yarn add react-native-gesture-handler react-native-reanimated @react-native-community/masked-view



```

### 7. react-query 설치 https://react-query.tanstack.com/overview

```
yarn add react-query

```

### 8. react-native-onboarding-swiper https://github.com/jfilter/react-native-onboarding-swiper

https://classic.yarnpkg.com/en/package/@types/react-native-onboarding-swiper#readme

```
yarn add @types/react-native-onboarding-swiper

```

###
