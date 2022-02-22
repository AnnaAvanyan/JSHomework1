function CompareStrings(s1,s2){

    for (let i = 0; i < s1.length; i++) {
        var is_found = false;
        for (let j = 0; j < s2.length; j++) {
            if(s1[i] == s2[j]){
                 is_found = true;
                 break;
            }

          } 
          if(!is_found){
              return false;
          }
      } 
      return true;
}
function ArrayIntersection(first, ...arrays) {
    return first.filter(elem => Array.from(arguments).every(arr => arr.includes(elem)));
}

var s1 = "name";
var s2 = "anme";
console.log(CompareStrings(s1,s2));
