

exports.evaluate = function(req,res)  {
	var lineReader = require('readline').createInterface({
		// file.in is the name of the file which contains the equation to evaluate.
		input: require('fs').createReadStream(req)//'file.in')
	});
      
	lineReader.on('line', function (line) {
		var result = evaluate(line.toString().trim().replace(/\{|\[/g, '(').replace(/\}|\]/g, ')'));
		console.log("Result: " + line.toString().trim() + " =  " + result);
    });

    /**
     * Main function
     * @param {*} eq 
     * @param {*} callback 
     * @returns final result
     */
    function evaluate(eq, callback) {
        const mulDiv = /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([*/])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
        const plusMin = /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([+-])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
        const parentheses = /(\d)?\s*\(([^()]*)\)\s*/;
        var current;

        if (typeof eq !== 'string') {
            return handleCallback(new TypeError('String argument is expected.'), null);
        }

        while (eq.search(/^\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*$/) === -1) {
            eq = fParentheses(eq);
            if (eq === current){ 
                return handleCallback(new SyntaxError('Syntax Error -> Invalid equation.'), null);
            }
            current = eq;
        }
        
        return handleCallback(null, +eq);
      
        /**
         * Begin with the analysis of the equation
         * @param {*} eq equation
         * @returns result
         */
        function fParentheses(eq) {
            while (eq.search(parentheses) !== -1) {
                eq = eq.replace(parentheses, function (a, b, c) {
                    c = fMulDiv(c);
                    c = fPlusMin(c);
                    return typeof b === 'string' ? b + '*' + c : c;
                });
            }
            eq = fMulDiv(eq);
            eq = fPlusMin(eq);
            return eq;
        }
      
        /**
         * This handles multiplication and division
         * @param {*} eq 
         * @returns 
         */
        function fMulDiv(eq) {
            while (eq.search(mulDiv) !== -1) {
                eq = eq.replace(mulDiv, function (a) {
                    const sides = mulDiv.exec(a);
                    const result = sides[2] === '*' ? sides[1] * sides[3] : sides[1] / sides[3];
                    return result >= 0 ? '+' + result : result;
                });
            }
            return eq;
        }
      
        /**
         * This handles sum and substracts
         * @param {*} eq 
         * @returns 
         */
        function fPlusMin(eq) {
            eq = eq.replace(/([+-])([+-])(\d|\.)/g, function (a, b, c, d) { 
                return (b === c ? '+' : '-') + d; 
            });
            while (eq.search(plusMin) !== -1) {
                eq = eq.replace(plusMin, function (a) {
                    const sides = plusMin.exec(a);
                return sides[2] === '+' ? +sides[1] + +sides[3] : sides[1] - sides[3];
                });
            }
            return eq;
        }
      
        /**
         * This handles the return call
         * @param {*} errObject 
         * @param {*} result 
         * @returns 
         */
        function handleCallback(errObject, result) {
          if (typeof callback !== 'function') {
            if (errObject !== null) throw errObject;
          } else {
            callback(errObject, result);
          }
          return result;
        }
      
      }
}