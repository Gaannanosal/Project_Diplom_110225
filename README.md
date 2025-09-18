###  «Garden Products» Интернет-магазин для дома и сада .
 ## О проекте
Интернет-магазин товаров для дома и сада.
Реализован удобный интерфейс для просмотра товаров, фильтрации, сортировки, добавления в корзину и оформления заказа.
## Технологии
React
Redux Toolkit
React Router
SCSS
React Hook Form
Local Storage
## Основной функционал
--Главная страница: категории, форма на скидку, товары со скидкой
--Категории: список и переход к товарам
--Товары: фильтрация и сортировка
--Корзина: добавление, удаление, изменение количества, расчет стоимости
--Дополнительно: модальное окно «Товар дня», тёмная тема, скелетон загрузки, адаптивность

## Установка и запуск 
git clone https://github.com/annanosal/Project_Diplom_110225.git
cd Project_Diplom_110225
npm install
npm run dev

## Структура проэкта 
src/
 ┣ components/    # Компоненты React
 ┣ pages/         # Страницы приложения
 ┣ store/         # Redux store
 ┣ hooks/         # Кастомные хуки
 ┣ styles/        # Стили
 ┗ main.jsx       # Точка входа
## API:
Фронтенд получает данные с backend-сервера:  
[https://telran-project-backend-rrj8.onrender.com](https://telran-project-backend-rrj8.onrender.com)

## Основные эндпоинты:
- GET /products — список всех товаров  
- GET /categories — список категорий товаров  
- GET /products?category=ID — товары по категории  
- GET /products?discount=true — товары со скидкой  
- GET /cart — содержимое корзины  
- POST /cart — добавить товар в корзину  
- PATCH /cart/:id — изменить количество товара в корзине  
- DELETE /cart/:id — удалить товар из корзины

## Автор
Ganna Nosal

