# A. Поиск в сломанном массиве

**ID успешной посылки**: 65115297

## Структура

`index.js` -- прием входных данных и вывод результата

`solution.js` -- обработка входных данных и форматирование сортированного массива

`quick-sort.js` -- алгоритм быстрой сортировки

`is-greater.js` -- компоратор

## Принцип работы
Принцип работы такой же, как у обычной быстрой сортировки, только добавлен кастомный компоратор в соответствие с задачей

## Доказательство корректности
Благодаря методу двух указателей и замены элементов in-place, сортировка происходит за O(1) в пространственной сложности

## Временная сложности
В среднем O(nlogn), в худшем случае -- O(n²)

## Пространственная сложность
В среднем случае O(logn), в худшем O(n)