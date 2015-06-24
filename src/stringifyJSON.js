// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Symbol turns something into a parameter INTO STRINGS

//stringy will work on primitives: numbers, booleans, strings, Symbol (?)
	//-null and undefined?

//.toString returns a primitive value
//return "" + obj ...to stringify via toString()
//what does JSON.stringfy actually do??
	//if obj is undefined, returns undefined
	//if object is a function, returns undefined

	//if obj is null, number, boolean, returns a string
	//if obj = array, will return obj as a string w quotes, with keys (in key value pairs) in quotes
		// "[" + [4] + "]" --> "[4]"
		// JSON.stringify([4]) -->"[4]"
	//if obj is object literal, the obj is reutrned as a string, with al the keys as strings
		//JSON.stringify({a: "f", j: true, e: 4, m: foo})
		//--> "{"a":"f","j":true,"e":4}"
		//forgets m: foo (foo is a declared fucntion)
	//if obj is an array, the entire is string now w quotes
var stringifyJSON = function(obj) {
  // your code goes here

  //testing for number
	if (	typeof(obj) === "number" ) {
		return "" + obj;
	} 
	//testing for booleans
	if (typeof(obj) === "boolean") {
		return "" + obj;
	}
	//testing for null
	if 	(obj === null) {
		return "" + obj;
	}
	//test for string
	else if (typeof obj === "string") {
		return "\"" + obj.toString() + "\""; 
	}
	//test for undefined
	 if (	obj  === undefined) {
		return undefined;
	}
	//testing for function
	if (typeof obj === "function") {
		return undefined;
	}
	//test for array
	if (Array.isArray(obj)) {
		if (obj.length === 0) {
			return '[]'
		} else {
			var res = '[';
      for (var i = 0; i < obj.length; i++) {
        res += (i ? ',' : '') + stringifyJSON(obj[i]);}
		}
      return res + ']';
	} 

	// testing if object literal
	if (toString.call(obj) === '[object Object]') {
    var tmp = [];
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
      	tmp.push(stringifyJSON(k) + ':' + stringifyJSON(obj[k])); 
      }
      if (obj[k] === undefined) {
      	return '{}';
      }
  	}

    return '{' + tmp.join(',') + '}';
  }

      
};

		//return "[" + obj + "]" //but doesnt address the nested objects that are possibly in the array and putting quotes around the keys




