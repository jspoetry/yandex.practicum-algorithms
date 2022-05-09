export const generateParenthesis = (count, open = 0, close = 0, str = '', ans = []) => {
  if (open === count && close === count ) {
    ans.push(str)
    return;
  }

  if (open < count) {
    generateParenthesis(count, open + 1, close, str + '(', ans);
  }

  if (close < open) {
    generateParenthesis(count, open, close + 1, str + ')', ans);
  }

  return ans.join('\n')
}