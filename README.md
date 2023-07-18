# Electrician-services-backend

## :scroll: Описание

- API для проекта [Electrician-services](https://github.com/EugeneCod/electrician-services), обрабатывающее введенные данные из формы заказа звонка и отправляющее email сообщение на определенный адрес.

## :toolbox: В работе применяются:

- NodeJS
- фреймворк Express
- библиотека Nodemailer

## :computer: Как развернуть проект

1. Клонировать репозиторий.
2. Установить необходимые зависимости (`npm install`)
3. Создать в корне проекта файл .env и внести в него необходимые переменые окружения для работы с выбраным почтовым сервисом. Для примера указан mail.ru:

- SMPT_HOST=smtp.mail.ru
- SMPT_PORT=465
- SMPT_MAIL=sample@mail.ru
- SMPT_PASSWORD=********** (Пароль для работы со стороннем почтовым приложением)
