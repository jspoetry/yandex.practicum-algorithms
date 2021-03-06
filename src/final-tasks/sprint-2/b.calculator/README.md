# B. Калькулятор

**ID успешной посылки**: 64417963

## Структура

`index.js` -- отвечает за приём данных из `stdin` и отображение результата

`stack.js` -- реализация стека

`calculator.js` -- отвечает за распознавание операндов и проведение арифметических операций

`solution.js` -- непосредственно алгоритм с решением

## Принцип работы
Входящая строка обрабатывается и сплитится в массив с операторами и цифрами.
Происходит итерирование по этому массиву. На каждой итерации происходит следующие проверки:

1. Является ли символ числом?
   * Если да, то добавляется в стек
2. Является ли символ оператором?
   * Если да, то достаётся два последних элемента из стека и над ними производится арифметическая операция
   и над ними производится арифметическая операция. Результат кладётся обратно в стек.
   
После итерации в стеке остаётся конечный результат выражения, который уже снимается и возвращается из функции

## Доказательство корректности 
Стек -- идеальная структура данных для решения этой задачи:
порядок *LIFO* позволяет нам легко доставать числа и класть обратно результаты операций без лишних временных затрат.

## Временная сложность
Т.к. происходит итерация по всем не пробельным символам, то *O(n)*

## Пространственная сложность
*O(n)*