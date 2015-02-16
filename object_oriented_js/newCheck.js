var Builder = function() {
  var a = "defaultA";
  var b = "defaultB";
  return {
      withA : function(anotherA) {
        a = anotherA;
        return this;
      },
      withB : function(anotherB) {
        b = anotherB; 
        return this;
      },
      build : function() {
        return "A is: " + a +", B is: " + b;
      }
  };
};
 
var builder = new Builder();
 
console.log(builder.build());
console.log(builder);
 