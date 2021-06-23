// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = (nums: any): number => {
  const sortedArray: number[] = [];
  const underScores: string[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (!sortedArray.includes(nums[i])) {
      sortedArray.push(nums[i]);
    } else {
      underScores.push("_");
    }
  }

  const totalArr = [...sortedArray, ...underScores];

  // nums = [...sortedArray, ...underScores];

  for (let i = 0; i < nums.length; i += 1) {
    nums[i] = totalArr[i];
  }

  return sortedArray.length;
};

export default removeDuplicates;
