// write a binary search function that takes in a sorted array and a target integer

// and returns the index of the target integer if it is present in the array, otherwise return -1

function binarySearch(array, target) {  
    // Write your code here.
      let left=0;
      let right=array.length-1;
      while(left<=right)
      {
          let mid=Math.floor((left+right)/2);
          if(array[mid]==target)
          {
              return mid;
          }
          else if(array[mid]<target)
          {
              left=mid+1;
          }
          else
          {
              right=mid-1;
          }
      }
      return -1;
  }

  