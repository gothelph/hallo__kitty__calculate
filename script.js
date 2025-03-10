let result = document.getElementById("result");

// Добавить число или оператор
function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

// Очистить дисплей
function clearDisplay() {
  result.value = "";
}

// Удалить последний символ
function deleteLast() {
  result.value = result.value.slice(0, -1);
}

// Вычислить результат
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
