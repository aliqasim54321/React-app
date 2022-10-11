let arr = [1, 3, 5, 7, 8, 9];
function binarySearch(arr, val) {
     let start = 0;
     let end = arr.length - 1;
   
     while (start <= end) {
       let mid = Math.floor((start + end) / 2);
   
       if (arr[mid] === val) {
         return console.log("Element is ", mid);
       }
   
       if (val < arr[mid]) {
         end = mid - 1;
       } else {
         start = mid + 1;
       }
     }
     return console.log("Element Not Found");
   }
binarySearch(arr,1)
