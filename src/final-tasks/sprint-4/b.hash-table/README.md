# A. Поисковая система

**ID успешной посылки**: 65369311

## Структура

`index.js` -- прием входных данных

`solution.js` -- интерпретация команд для хеш-таблицы и вывод результата

`hash-table.js` -- реализация хеш-таблицы

## Принцип работы
В хеш-таблицы создаётся массив на максимальное число в рамках задачи. Создаю кортежи [key, value].
Для вычисления номера корзины использую метод деления. Пропускаю шаг хеширование, т.к. все ключи и так целочисленные.

## Доказательство корректности
Деления по модулю на простое число позволяет равномерно распределить корзины

## Временная сложность
O(n) в худшем случае

## Пространственная сложность
O(n)
