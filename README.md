# 🚀 Flutter Web Hub (Rick & Morty + West Side Hotel + UI Experiments)

Многостраничное Flutter Web приложение, объединяющее несколько независимых проектов и UI-экспериментов в одном интерфейсе.

Проект демонстрирует навыки:
- Clean Architecture
- BLoC / Cubit state management
- REST API интеграции
- адаптивной вёрстки
- сложных анимаций
- работы с backend-like логикой (AI, booking, DB)

🌐 Live Demo:
https://mcbombo4ka.github.io/

---

## 🧩 Структура проекта

Проект разделён на независимые модули:

### 🛸 Rick and Morty module
Полноценное приложение с Clean Architecture:

- Domain / Data / Presentation слои
- BLoC управление состоянием
- REST API (персонажи)
- кеширование и репозитории
- кастомные UI компоненты
- анимации переходов

### 🏨 West Side Hotel module
(ВАЖНО!) - Supabase успел удалить базу данных.
Восстановление не увенчалось успехом.
Система управления отелем:

- бронирование номеров
- авторизация (auth bloc)
- интеграция с базой данных
- AI-консультант (чат-логика)
- UI для мобильных и desktop экранов

### 🌌 Hub / UI Layer
Общий вход в приложение:

- Landing page
- портал анимации
- звёздный фон
- layout система
- навигация между модулями

---

## 🧱 Архитектура

Используется гибридный подход:

- Clean Architecture (Rick and Morty)
- Feature-based structure (West Side Hotel)
- Widget-based UI system (Hub)

State management:
- BLoC
- Cubit

---

## 🎨 Фичи

- 🌍 Flutter Web (production build)
- 📱 адаптивность (mobile / tablet / desktop)
- 🌀 кастомные анимации (portal, stars, sprites)
- 🧠 AI chat integration (раньше работал, честно)
- 🏨 booking system 
- 🧩 modular architecture
- ⚡ оптимизированный web build

---

## 🧰 Tech Stack

- Flutter
- Dart
- flutter_bloc
- get_it
- HTTP / REST API
- Supabase / DB layer
- CustomPainter / AnimationController
- Hive
- Go_router
