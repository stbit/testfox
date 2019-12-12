# testfox

### Установка зависимостей и запуск приложения на http://localhost:8080/ (если свободен 8080)
```
npm install
npm run serve
```

### Запуск тестов
```
npm run test:unit
```

### Установка и запуск приложения в docker на http://localhost:8080/
```
docker-compose up
```
В dockerfile так же запускаются тесты при сборке. Сборку фронта нужно разбивать на промежуточные образы. В 1м собирать проект в /dist и выполнять тесты, во 2м образе копируем из /dist в рабочий каталог(чтоб в конечный образ мусор ввиде node_modules и тд не попадало). В данном случае так не делается, так как нужно запустить приложение для тестирования в упрощенном виде.

### Комментарий
Навигация реализована с помощью хуков beforeRouteEnter, beforeRouteUpdate и похожа на навигацию обычного сайта. В 99% приходиться реализовывать ввиде приложения(быструю смену состояния и отображения лоудера пока не подрузятся результаты), но конкретных требований для тестового задания в данном случае небыло.
