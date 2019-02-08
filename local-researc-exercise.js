//Create amodule that exports a function

//This function should take a number as a parameter and store it in a list.
//The list should not be asscessible from outside the module.

list =[];

var listNum = function takeNum(num) {
  list.push(num);
  return list; 
  }



var finalExport = function sortfunction(list) {
  
    function sortfunction(a,b ) {
      return (a - b);
    }

  var sortedArray = list.sort(sortfunction);
  return sortedArray;

}

module.exports = {listNum: listNum, finalExport: finalExport}