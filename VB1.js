function numberOfItems(arr, item) {
  // Write the code that goes here
  //assessment
  
  //can use map reduce, built or regulars
  
  //recursively iterate through nested arrays in search of items
  
  //check
  
  if(!arr || !item || arr.length === 0 ){
    return 0;
  }
  
  //recrusivley check each elements cause memory overhead, or simply iterate and recursively check the occurences on the nest arrays, 
  
  //say we use a closure
  let result = 0;
  
  for(let i =0; i<arr.length; i++) {
    let el = arr[i];
    if(Array.isArray(el)){
      //recursive call and check from within nested array
      result+= numberOfItems(el, item);
    }
    else if(el==item){
      //keep in mind that shallow is going to force equate ints, chars eg 0 '0' bc loose typing
      result++;
    }
  }
  
  
  return result;
}
