//Find node in a list
// function Slist(){
//     this.head = null
// }
//     function Node(val){
//         this.val = val
//         this.next = null
//     }
// Slist.prototype.addFront = function(val){
//     var newNode = newNode(val);
//     newNode.next = this.head;
//     this.head = newNode;
// }
// Slist.prototype.contain = function(val){
//     var runner = this.head;
//     while(runner !== null){
//         if (runner.val === val){
//             return True;
//         }
//     }
//     return false;
// }

// // isPalindrome
// function palindrome(str) {
//     var tempStr = ""
//     var longPal = ""

//     for(var x=0; x < str.length/2; x++) {
//         if(str[x] !== "" && str[x].length > 1){

//         }
//     }

//create dictionary
function createDict(first_array, sec_array){
    var dict = {}
    for(var idx=0; idx < first_array.length; idx++){
        dict[arr[idx]] = sec_array[idx];
    }
    console.log(dict);
    return dict;
}
createDict(["a","b","c"],[4,5,6])

// //reverse dictionary
// function reverseDict(dict){
//     var newDict ={}
//     for(key in dict) 
//     {
//         newDict[dict[key]] = key;
//     }
//     return newDict;
// }
//     inverDict( {
//         "foo" : 123456,
//         "bar" : 789012,
//         "baz" : 345678,
//         "bat" : 901234 })

// //valid Parentheses
// function validParentheses(str){
//     counter = 0
//     for(var idx=0; idx < str.length; i++){
//         if(str[i] === "("){
//             counter++;
//         } 
//         else if (str == ")"){
//             counter--
//         }
//         else if (str == "{" || str == "}"){
//             return false
//         }
//         if(counter < 0){
//             break
//         }
//     }
//     return counter
// }
// validParentheses("(((}}")
// }
