import decrease from 'helpers/number/decrease';
import increase from 'helpers/number/increase';

export default ([row, column]) => [
  [decrease(row), column], // ⭡
  [decrease(row), increase(column)], // ⭧
  [row, increase(column)], // ⭢
  [increase(row), increase(column)], // ⭨
  [increase(row), column], // ⭣
  [increase(row), decrease(column)], // ⭩
  [row, decrease(column)], // ⭠
  [decrease(row), decrease(column)], // ⭦
];
