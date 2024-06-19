//* Array Splice Methods ///*
const arr1=['1','2','3','4','5',
    '6','7','8','9','10'
]
const arr2=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
/* 
console.log(arr1.splice(1,5)); */ //? This is the Spliced Array
///!!! VERY IMPORTANT --- Please Remember that unlike slice , In splice the end Array Argument is Also Included , 
//! It means that If we Start from 1 and end at 5 then elements from index 1 till 5 are included 
/* console.log(arr1); *///? This is the Original Array which is now Spliced up , Means the original elements are now been taken out from it
//* Array Slice Method 

 const Arr1=['A','B','C','D','E','F','G','H']

/* console.log(Arr1.slice( 0, 7));   *////# Hence we Can see here that by writing (0,7) our last element is missing 
//# Because in slice method the index of last element is one less than the writtten while in splice the index of last element is equal to the one that we written in out console.log function 

//* Array Concatenation and Reverse

const Arr=['Love ', ' Care ', 'Pamper ', 'Kindness', 'Sacrifice ']
console.log(Arr.reverse(Arr)); //! Do not Forget to add  const with arr or else reverse method will not work 



