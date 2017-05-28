/**
 * Question 242
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * For this problem, I am using sorting which is the first method suggested in
 * the editorial solutions for this problem. This works because if the two
 * string are using the same set of characters, after sorting, they will have
 * same character at each location.
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sArray = s.split('').sort();
  let tArray = t.split('').sort();
  // sort the two string so that for each char will have same order
  for (let i = sArray.length - 1; i >= 0; i--) {
    if (sArray[i] !== tArray[i]) return false;
  }

  return true;
};

/**
 * This problem can also be solved using Hash Table. If the two string are using
 * the same character set, they will have same occurrence of each character.
 *
 * Notice: Actually a single counter table will be enough, since you can
 * increase for the characters in s and decrease for the character in t. Similar
 * strategy can be applied to check whether something is appearing two times.
 * public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
        return false;
    }
    int[] counter = new int[26];
    for (int i = 0; i < s.length(); i++) {
        counter[s.charAt(i) - 'a']++;
        counter[t.charAt(i) - 'a']--;
    }
    for (int count : counter) {
        if (count != 0) {
            return false;
        }
    }
    return true;
}
 */