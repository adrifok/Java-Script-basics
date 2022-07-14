//ALGORITHMS
   
function isPalindrome(word){
    // step1 put a pointer at each extreme of the word
    // step2 iterate the string inwards
    // step3 at each iteration check if the pointers represents equal values. If this condition isn't accomplished the word isn't a palindrome
    let left = 0
    let right = word.length - 1
        while(left < right){
            if(word[left] !== word[right]) return false
            left++
            right--        }

return true;
}

isPalindrome('neuquen') //true
isPalindrome('Buenos Aires') //false
// ----------------------------------------//

/* Function twoNumberSum: If any of 2 numbers in the array sum up to the target sum, the funcions should return them in an array. If no 2 numbers sum up
to the target sum, the function should return an empty array- complexity O(n2)*/
function twoNumbersSum(array, targetSum){
    let result = [];
// we use a nested loop to test every possible combination of numbers within the array
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++){
// if we find the right combination, we push both values into the result array and return it
         if(array[i] + array[j] === targetSum){
            result.push(array[i])
            result.push(array[j])
            return result;
         }
      }  
   }
//    return the result array
   return result
}

// console.log(twoNumbersSum([9,1,3,4,5], 6));   // [1,5]
// console.log(twoNumbersSum([1,2,3,4,5],10))  //[]

// another solution: complexity O(n log(n))
function twoNumbersSumAnotherSolution (array, targetSum){
    // sort the array and iterate it with one pointer on each extreme
    // at each iteration, check if the sum of the 2 pointers is bigger or smaller than the target
    // if it's bigger, move the right pointer to the left
    // if it's smaller, move the left pointer to the right
    let sortedArray = array.sort((a,b) => a - b)
    let leftLimit = 0
    let rightLimit = sortedArray.length -1;

    while(leftLimit < rightLimit){
        const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit]

        if(currentSum === targetSum) return [sortedArray[leftLimit]], sortedArray[rightLimit]
        else currentSum < targetSum ? leftLimit ++ : rightLimit--   // ? : returns value based on the condition(ternary operator)
    }
        return [];
}

// console.log(twoNumbersSumAnotherSolution([9,1,3,4,5], 6))  //[1, 5]
// console.log(twoNumbersSumAnotherSolution([1,2,3,34,5], 10))  // [] */

//another another solution: complexity -O(n)
function twoNumbersSumAnotherAnotherSolution(array, targetSum) {
    //iterate over array once, and at each iteration check if the number you need to get to the target exists in the array
    //if it exists, return its index and the present number index
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        let desiredNumber = targetSum - array[i]
        if (array.indexOf(desiredNumber) !== -1 && array.indexOf(desiredNumber) !== i){
            result.push(array[i])
            result.push(array[array.indexOf(desiredNumber)])
            break;
        }
    }
    return result;
}

// console.log(twoNumbersSumAnotherAnotherSolution([0,9,1,3,4,5,], 6))  //[1, 5]
// console.log(twoNumbersSumAnotherAnotherSolution([1,2,3,4,5,67], 10)) //[]
//--------------------------------------------------------//

//LINEAR SEARCH ALGORITHM
/*Linear Search consists of iterating over the data structure one value at a time and checking if that value is the one we
are looking for.*/
/*In the example we have an array of numbers and for this array we want to write a function that takes a number as the input 
and returns that number's index in the array.If it doesn't exist in the array, it will return -1 */ 
const arr = [1,2,3,4,5,6,7,8,9,10]   //complexity linear -O(n)

const search = num =>{
    for (let i = 0; i < arr.length; i++){
        if (num === arr[i]) return i;
        }
    return -1
    }

    // console.log(search(6));   //5
    // console.log(search(11));  //-1
    // console.log(search(0))    // -1
    // console.log(search(78))   // -1

//BINARY SEARCH ALGORITHM
/*What we do in binary search is the following:
-select the middle value of our data structure and ask: is this the value am I looking for?
-if not, we ask: whether the value we're loooking for is greater or less then the middle value?
-if it's greater, we discard all the values smaller than the mid value. If it's smaller we discard all the values
greater than the middle value.
-and then we repeat the same operation until we find the given value or the remaining 'piece' of the data structure that
can't be divided anymore.*/

//same example with binary search approach. Complexity -O(log n):
const arr2 = [1,2,3,14,5,3,7,18,9,102,11,12,13,14,0];

const search2 = num =>{
//we will use 3 pointers: one at the start of the array, one at the middle and one at the end.
    // let start = 0;
    // let end = arr2.length -1;
    // let middle = Math.floor((start + end /2));
//while we haven't found the number and the starter point is equal or smaller to the end pointer
    while(arr2[middle] !== num && start <= end){
//if the desired number is smaller than the middle, discard the bigger half of the array
    if(num < arr[middle]) end= middle -1;
//if the desired number is bigger than the middle, discard the smaller half of the array
        else start = middle + 1;
//recalculate the middle value
        middle = Math.floor ((start + end)/2)
    
    }
//if we've exited the loop it mean we've either found the value of the array can't be divided further
        return arr2[middle] === num ? middle : -1;    // ? : returns value based on the condition (ternary operator)
}
//console.log(search2(6)); //5
//console.log(search2(3));  //6
//console.log(search2(27));  //-1

//SORTING ALGORITHMS
//Bubble Sort - Complexity quadratic -0(n2)
/*Bubble sort iterates though the data structure and compares one pair of values at a time. If he order of those value is 
incorrect, it swaps its position to correct it. The iteartion is repeated until the datais ordered.
Complexity quadratic -O(n2) */

const arr3 = [1,2,3,14,5,3,7,18,9,102,11,12,13,14,0];
const bubbleSort = arr =>{
    //set a flag variable
    let noSwaps

//we will have a nested loop with a pointer iterating from right to left
    for (let i = 0; i < arr3.length; i--) {
        noSwaps = true;
//and another iterating from left to right
    for (let j = 0; j < arr3.length; j++) {
//we compare the 2 pointers
        if(arr3[j] > arr3[j + 1]){
            let temp = arr3[j]
            arr3[j] = arr3[j + 1]
            arr3[j + 1] = temp
            noSwaps = false
        }
    }        
        if (noSwaps)break;    
    }
}

    bubbleSort(arr);  
    //console.log(arr3);

//SELECTION SORT- Complexity quadratic-O(n2)
/*Selection sort is similar to bubble sort but instead of placing the bigger values at the end of the data structure,
it focuses on placing the smaller values at the beginning:
-store the first item of the data structure as the minimum value.
-iterate through the data structure comparing each value with the minimum value. If a smaller values is found, it identifies
this value as the new minimum value.
-if the minimum value isn't the first value of the data structure, it swaps the positions of te minimum value and the first value.
-it repeats the iteration until the data structure is ordered.  */

    const arr4 = [3,2,1,4,6,33,5,28,7,9,8,0,11]

    const selectionSort = arr4 => {
        for (let i = 0; i < arr4.length; i++) {             //i comienza iterando en la 1ra posicion (0)
             let lowest = i;
             for (let j = i + 1; j < arr4.length; j++) {    //J comienza iterando en la 2da posicion(i+1)
                if(arr4[j] < arr4[lowest]){
                    lowest = j;
                }
            }
            if(i !== lowest){
                let temp = arr4[i]
                arr4[i] = arr4[lowest]
                arr4[lowest] = temp
            }
        }
    }
        selectionSort(arr4);
        //console.log(arr4); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 28, 33]

//INSERTION SORT -Complexity quadratic (O(n2))
/* 
Insertion sort orders the data structure by creating an 'ordered half' that is always correctly sorted, and iterates
through the data structure picking each value and inserting it in the ordered half exactly in the place it should be.
The steps it takes are the following:
-it starts by picking the second element in the data structure
-it compares this element with the one before it and swap its positions if necessary
-it continues to the next element and if it's not in the right position, it iterates through the 'ordered half'
to find its correct position and inserts it there.
-it repeats the same process until the data structure is sorted.*/

const arr5 = [3,2,1,0,4,32,6,5,21,7,99,8,12]

const insertionSort = arr5 =>{
    let currentVal
     for (let i = 0; i < arr5.length; i++) {
        currentVal = arr5[i]
        for (var j = i -1; j >= 0 && arr5[j] > currentVal; j--) {
            arr5[j + 1] = arr5[j]
            }
             arr5[j + 1] = currentVal
        }
    return arr5;
}

insertionSort(arr5)
//console.log(arr5);   //[0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 21, 32, 99]

//MERGE SORT -Complexity O(n log n)
/*Merge Sort is an algorithm that recursively decomposes the data structure into individual values, and then compose it
again in a sorted way.
The steps are the following:
-Recursively break up the data structure into halves until each 'piece' has only value.
-then, recursively merge the pieces in a sorted way until it gets back to the length of the original data structure.*/

const arr6 = [3,2,1,87,6,8,4,3,10,26,19]
//merge function
const merge = (arrA, arrB) =>{
    const results = [];
    let i = 0;
    let j = 0;

    while(i < arrA.length && j < arrB.length){
        if(arrB[j] > arrA[i]){
            results.push(arrA[i])
            i++
        }else{
            results.push(arrB[j])
            j++
        }
    }

        while(i <arrA.length){
            results.push(arrA[i])
            i++;
        }
        while (j < arrB.length){
            results.push(arrB[j])
            j++;
        }
            return results;
 
    }
        const mergeSort = arr6 =>{
            if (arr6.length <= 1) return arr6;
            let mid = Math.floor(arr6.length/2);
            let left = mergeSort(arr6.slice(0, mid));
            let right = mergeSort(arr6.slice(mid));
            return merge(left, right); 
        }

        //console.log(mergeSort(arr6)); //1, 2, 3, 3, 4, 6, 8, 10, 19, 26, 87

//QUICK SORT -Complexity O(n log n)
/* Quick sort works by selecting one element (called 'pivot') and finding the index where the pivot should end up in the sorted array.
The steps are the following:
-Identify the pivot (ideally the median value of the array) and place it in the index it should be.
-recursively execute the same process on each 'half' of the data structure. */

const arr7 = [3,2,1,87,6,8,4,3,10,26,19];

const pivot = (arr7, start = 0, end = arr7.length -1) =>{
    const swap = (arr7, idx1, idx2) =>[arr7[idx1], arr7[idx2]] = [arr7[idx2], arr7[idx1]]
    let pivot = arr7[start];
    let swapIdx = start;

      for (let i = start + 1; i <= end; i++) {
        if(pivot > arr7[i]){
            swapIdx++
            swap(arr7, swapIdx, i)
        }
    }
        swap(arr7, start, swapIdx)
        return swapIdx;
}
    const quickSort =(arr7, left = 0, right = arr7.length -1)=>{
        if( left < right) {
            let pivotIndex = pivot(arr7, left, right)
            quickSort(arr7, left, pivotIndex -1)
            quickSort(arr7, pivotIndex + 1, right)
        }
     
        return arr7;
    }
    console.log(quickSort(arr7)); //[ 1, 2, 3, 3, 4, 6, 8, 10, 19, 26, 87 ]

//RADIX SORT -Complexity O(n*k) (k being the number of digits the largest number has)
/*Radix sort only works on lists of numbers.
It sorts values by their digits in order. It first sorts all values by the first digit, then again by the 2nd, then by the 3rd.
This process is repeated as many times as the number of digits of the biggest number in the list has. At the end, it returns
the fully sorted list.
The steps are the following:
-figure how many digits the largest number has.
-loop through the list up to the largest number of digits. In every iteration:
-create 'buckets' for each digit (from 0 to 9) and place each value in its corresponding bucket according to the digit
being evaluated.
-replace the existing list with the values sorted in the buckets, starting from 0 and going up to 9. */

const arr8 = [3,2,1,87,6,8,4,3,10,26,19];

const getDigit = (num, i)=> Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
const digitCount = num =>{
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
 }
 const mostDigits = nums =>{
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) maxDigits = Math.max(maxDigits, digitCount(nums[i])) 
    return maxDigits;
 }

const radixSort = nums => {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from ({length : 10}, () => [])

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i])
            }
            nums = [].concat(...digitBuckets)
        }
        return nums;
}
console.log(radixSort(arr8)); //[ 1, 2, 3, 3, 4, 6, 8, 10, 19, 26, 87 ]

                         //TRAVERSING ALGORITHMS
/*This algorithms are used to iterate through data structures, like a tree, where we can prioritize iterations in 2 main ways:
either breadth or depth.
-if we use depth, we will descend through each branch of the tree, going from the head to the leaf of the branch.
-if we use breadth, we will go through each tree level horizontally iteratin through all nodes that are on the same level before
descending to the next level. */

//BREADTH FIRST SEARCH(BFS) -Complexity 
/*This kind of trasversal iterate through our data structure in a horizontal way. The following steps are:
-create a queue and a variable to store the nodes that have been 'visited' without losing its.
-place the root node inside the queue.
-keep looping as long as there's anything in the queue.
-dequeue a node from the queue and push the value of the node into the variable that stores the visited nodes.
-if there's a left property on the dequeued node, add it to the queue.
-if there's a right property on the dequeued node, add it to the queue. */

class Node {
    constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let miNodo = new Node(value);
        if(this.root === null){
            this.root = miNodo;
            return this;
           }
           let current = this.root
           while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = miNodo;
                    return this;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = miNodo;
                    return this;
                }
                current = current.right;
            }
           }
        }

        BFS(){
            var node = this.root,
            data = [],
            queue = [];
            queue.push(node);

           while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
           } 
           return data;
        }
    }
const tree = new BinarySearchTree()
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);//BinarySeachTree { root: Node { value: 10,left: 
//Node { value: 6,left: Node { value: 3, left: null, right: null },right: Node { value: 8, left: null, right: null } },
//right: Node { value: 15,left: null,right: Node { value: 20, left: null, right: null } } } }
console.log(tree.BFS());//[ 10, 6, 15, 3, 8, 20 ]
    
//DEPTH FIRST SEARCH (DFS)
/*DFS iterates through our data structure in a vertical way. There are 3 main ways in which DFS can be done, each being different
by just changing the order in which nodes are visited:
-Pre order: visit current node, then left node, then right node.
-Post order: explore all children to the left, and all children to the right before visiting the node.
-In order: explore all chidren to the left, visit the current node, and explore all children to the right.  */

//PRE ORDER DFS
/* Following steps:
-create a variable to store the values of the visited nodes.
-store the root of the tree in a variable.
-write a helper function that accepts a node as a parameter
-push the value of the node to the variable that stores variables.
-if the node has a left property, call helper function with left node as parameter.
-if the node has a right property, call helper function with right node as parameter. 
-call the helper fn with the current node as parameter  */
class Node2 {
    constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree2{
    constructor(){
        this.root = null;
     }
    insert(value){
        let miNodo2 = new Node2(value);
        if(this.root === null){
            this.root = miNodo2;
            return this;
           }
           var current = this.root
           while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = miNodo2;
                    return this;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = miNodo2;
                    return this;
                }
                current = current.right;
            }
        }
    }

 DFSPreOrder(){
    var data2 = [];
    function helper(node){
        data2.push(node.value);
        if(node.left) helper(node.left);//if the node has a left property, call helper function with left node as parameter.
        if(node.right) helper(node.right);//if the node has a right property, call helper function with right node as parameter. 
    }
         helper(this.root);  //call the helper fn with the current node as parameter
        return data2;
      }
    }
    
var tree2 = new BinarySearchTree2();//BinarySeachTree { root: 
//Node { value: 10,
  //left: 
  // Node { value: 6,
  //   left: Node { value: 3, left: null, right: 
//null },
    // right: Node { value: 8, left: null, right: 
//null } },
  //right: 
   //Node { value: 15,
    // left: null,
    // right: Node { value: 20, left: null, right: 
tree2.insert(10);
tree2.insert(6);
tree2.insert(15);
tree2.insert(3);
tree2.insert(8);
tree2.insert(20);
console.log(tree2.DFSPreOrder());//[ 10, 6, 3, 8, 15, 20 ]    

//POST ORDER DFS 
/*In post order DFS algorithm we do the following:
-create a variable to store the values of the visited nodes.
-store the root of the tree in a variable.
-write a helper function that accepts a node as a parameter.
-if the node has a left property, call helper function with left node as parameter.
-if the node has a right property, call helper function with right node as parameter. 
-call the helper fn with the current node as parameter */
class Node3 {
    constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree3{
    constructor(){
        this.root = null;
    }
    insert(value){
    let miNodo3 = new Node3(value);
    if(this.root === null){
        this.root = miNodo3;
        return this;
       }
       var current = this.root
       while(true){
        if(value === current.value) return undefined
        if(value < current.value){
            if(current.left === null){
                current.left = miNodo3;
                return this;
            }
            current = current.left;
        }else{
            if(current.right === null){
                current.right = miNodo3;
                return this;
            }
            current = current.right;
        }
    }
}
    DFSPostOrder(){
    var data3 = []
    function helper (node){
        if(node.left) helper(node.left);
        if(node.right) helper(node.right)
        data3.push(node.value);
    }
    helper(this.root);
    return data3;
    }
}

const tree3 = new BinarySearchTree3();
tree3.insert(10);
tree3.insert(6);
tree3.insert(15);
tree3.insert(3);
tree3.insert(8);
tree3.insert(20);
console.log(tree3.DFSPostOrder());//[ 10, 6, 3, 8, 15, 20 ]

//IN ORDER DFS
/*In post order DFS algorithm we do the following:
-create a variable to store the values of the visited nodes.
-store the root of the tree in a variable.
-write a helper function that accepts a node as a parameter.
-if the node has a left property, call helper function with left node as parameter.
-if the node has a right property, call helper function with right node as parameter. 
-call the helper fn with the current node as parameter */
class Node4 {
    constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree4 {
    constructor(){
        this.root = null;
    }
    insert(value){
    let miNodo4 = new Node4(value);
    if(this.root === null){
        this.root = miNodo4;
        return this;
       }
       var current = this.root
       while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
            if(current.left === null){
                current.left = miNodo4;
                return this;
            }
            current = current.left;
        }else{
            if(current.right === null){
                current.right = miNodo4;
                return this;
            }
            current = current.right;
        }
    }
}
    DFSPostOrder(){
    var data4 = [];
    function helper (node){
        if(node.left) helper(node.left);
        data4.push(node.value);
        if(node.right) helper(node.right);
    }
    helper(this.root);
    return data4;
    }
}

var tree4 = new BinarySearchTree4();
tree4.insert(10);
tree4.insert(6);
tree4.insert(15);
tree4.insert(3);
tree4.insert(8);
tree4.insert(20);
console.log(tree4.DFSPostOrder());//[ 10, 6, 3, 8, 15, 20 ]


