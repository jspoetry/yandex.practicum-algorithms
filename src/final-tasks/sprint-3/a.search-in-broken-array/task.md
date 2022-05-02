# A. Поиск в сломанном массиве

Алла ошиблась при копировании из одной структуры данных в другую. Она хранила массив чисел в кольцевом буфере. Массив был отсортирован по возрастанию, и в нём можно было найти элемент за логарифмическое время. Алла скопировала данные из кольцевого буфера в обычный массив, но сдвинула данные исходной отсортированной последовательности. Теперь массив не является отсортированным. Тем не менее, нужно обеспечить возможность находить в нем элемент за
*O*(log*n*).

Можно предполагать, что в массиве только уникальные элементы.

**Задачу необходимо сдавать, выбрав компилятор Make! Решение отправляется файлом. Требуемые сигнатуры функций лежат в заготовках кода на диске.**

От вас требуется реализовать функцию, осуществляющую поиск в сломанном массиве. Файлы с заготовками кода, содержащими сигнатуры функций и базовый тест для поддерживаемых языков, находятся на Яндекс.Диске по ссылке. Обратите внимание, что считывать данные и выводить ответ не требуется.
Разрешение файла должно соответствовать языку, на котором вы пишете (.cpp, .java, .go, .js, .py). Если вы пишете на Java, назовите файл с решением Solution.java, для C# – Solution.cs. Для остальных языков название может быть любым, кроме solution.ext, где ext – разрешение для вашего языка.

## Формат ввода

Функция принимает массив натуральных чисел и искомое число *k*. Длина массива не превосходит 10000. Элементы массива и число *k* не превосходят по значению 10000.

В примерах:

В первой строке записано число *n* –— длина массива. Во второй строке записано положительное число *k* –— искомый элемент. Далее в строку через пробел записано *n* натуральных чисел – элементы массива.

## Формат вывода

Функция должна вернуть индекс элемента, равного *k*, если такой есть в массиве (нумерация с нуля). Если элемент не найден, функция должна вернуть − 1. Изменять массив нельзя.

Для отсечения неэффективных решений ваша функция будет запускаться от 100000 до 1000000 раз.

### Пример 1

| Ввод                     | Вывод |
|--------------------------|-------|
| 9                        | 6     |
| 5                        |       |
| 19 21 100 101 1 4 5 7 12 |       |

### Пример 2

| Ввод | Вывод |
|------|-------|
| 2    | 1     |
| 1    |       |
| 5 1  |       |