# LEB <span style='color: cyan'>2</span>
Ling Electron Boilerplate

<img src="https://github.com/DiegoLing33/LEB/blob/master/src/assets/leb.png?raw=true" width="200" height="200" />

## Описание
Простой бойлерплейт электрона. Включает в себя `scss` и `typescript`. Все сконфигурировано по минимальному - простому.

## Почему LEB?
1. Контент приложения обновляется при изменении кода сам. Допишите что-то в index.html - содержимое обновится!
2. Решена проблема с высотой приложения в CSS - никакого resize костыля!
3. Полная поддержка SCSS и TS из коробки
4. Скрипт: `yarn dev`

## Как использовать?
```shell
git clone https://github.com/DiegoLing33/LEB.git

cd LEB

yarn

yarn dev
```

После установки будут доступны команды:
- `yarn src:build` - сборка src из typescript в js
- `yarn src:watch` - сборка src из typescript в js в реальном времени


- `yarn start` - запуск электрона
  

- `yarn pack:osx` - упаковка OSX
- `yarn pack:win64` - упаковка win64

- - -
- `yarn dev` - запускает все необходимое, для комфортной разработки

<img src="https://github.com/DiegoLing33/LEB/blob/master/snap0.png?raw=true" />
