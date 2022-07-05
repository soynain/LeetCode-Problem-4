var merge=function(left, right) {
    let sortedArr = []; // the sorted elements will go here
  
    while (left.length && right.length) {
      // insert the smallest element to the sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    // use spread operator and create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
  }
var mergeSort=(arr)=> {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
  }

var findMedianSortedArrays = function (nums1, nums2) {
    let joinArrays=[...nums1,...nums2];
    let newArray=mergeSort(joinArrays);
    let left=0,right=newArray.length;
    console.log(newArray)
    if(newArray.length%2!==0){
        return parseFloat(newArray[(right-1)/2]);
    }else{
        console.log(newArray[((right)/2)-1],' ',newArray[((right)/2)])
        return parseFloat((newArray[((right)/2)-1]+newArray[((right)/2)])/2);
    }
};

console.log(findMedianSortedArrays([1, 2], [3,4]))