/*
 * @Author: liuyuhao
 * @Date: 2023-06-21 11:24:10
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-06-21 16:50:41
 * @Description: 暴力解法
 */
/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length === 1) return s

  // 前后字符是否相等
  const eq = (before: number, after: number) => {
    return s[before] === s[after]
  }

  if (s.length === 2) return eq(0, 1) ? s : s[0]

  let result = s[0]

  //是否为回文字符串
  const isPalindrome = (start: number, end: number): boolean => {
    if (eq(start, end)) {
      if (end - 2 > start) {
        return isPalindrome(start + 1, end - 1)
      } else {
        return true
      }
    } else {
      return false
    }
  }

  // 双指针遍历
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (isPalindrome(i, j)) {
        const str = s.slice(i, j + 1)
        if (str.length > result.length) {
          result = str
        }
      }
    }
  }

  return result
}
// @lc code=end
