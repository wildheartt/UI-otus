# UI Components Library

Библиотека React компонентов с поддержкой Storybook и визуального тестирования Loki.

## Компоненты

- **Header** - Заголовок с поддержкой уровней (h1-h6)
- **Paragraph** - Параграф текста с различными размерами
- **Spacer** - Пробельный блок с опциональной горизонтальной линией
- **Collapsible** - Схлопывающийся блок контента
- **Image** - Компонент изображения с опциональным скруглением

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск Storybook
npm run storybook

# Сборка Storybook для продакшена
npm run build-storybook

# Линтинг кода
npm run lint
npm run lint:fix

# Loki тесты
npm run loki:test
npm run loki:approve
npm run loki:update
```

## Структура проекта

```
src/
  components/
    Header/
      Header.js
      Header.css
      Header.stories.js
    Paragraph/
      Paragraph.js
      Paragraph.css
      Paragraph.stories.js
    Spacer/
      Spacer.js
      Spacer.css
      Spacer.stories.js
    Collapsible/
      Collapsible.js
      Collapsible.css
      Collapsible.stories.js
    Image/
      Image.js
      Image.css
      Image.stories.js
    index.js
```

## Деплой

Проект автоматически деплоится на GitHub Pages при пуше в main ветку.

Storybook доступен по адресу: `https://username.github.io/UI-otus/`

## Технологии

- React 18
- Storybook 7
- Loki для визуального тестирования
- ESLint для проверки кода
- GitHub Actions для CI/CD
- GitHub Pages для хостинга
