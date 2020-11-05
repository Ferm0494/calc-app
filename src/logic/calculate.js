const calculate =(calculator,buttonName)=>{
    const {total,next,operation}= calculator;
     
     switch (buttonName) {
         case '÷':
         case 'X':
         case '-':
         case '+':
             if(next){
                if(total){
                    const previousOp = operation
                    return{
                        total: operate(total,next,previousOp),
                        next: null,
                        operation: buttonName,
                    }
                }
                return{
                    total: next,
                    next: null,
                    operation: buttonName
                } 
             }
             if(total && !next){
                 return {
                     total,
                     next,
                     operation: buttonName
                 }
             }
             return {
                 total,
                 next,
                 operation
             }
 
         case '=':
             if(total && next === null && operation){
                 return{
                     total,
                     next,
                     operation: null
                 }
             }
             return{
                 total: operate(total,next,operation),
                 next: null,
                 operation: null
             } 
         case 'AC':
             return {
                 total: 0,
                 next:null,
                 operation: null
             }
         case '+/-':
             return{
                 total: total * -1,
                 next: next * -1,
                 operation,
             }
         case '%':
             if(next !== null) {
                 return {
                     total,
                     next: operate(0,next,buttonName),
                     operation
                 }
             }
             break;
 
         case '.':
             if(next !== null){
                 const char = next.toString().slice(-1)
                return char === '.' ? {total,next,operation} : {total,next: `${next}.`,operation}
             }
             return {total, next: '0.', operation}
     
         default:
             const finalTotal = total.split('').push(buttonName);
 
             return{
                 total: finalTotal.join(''),
                 next,
                 operation,
             }
             
         break;
     }
 
 
 }
 
 export default calculate