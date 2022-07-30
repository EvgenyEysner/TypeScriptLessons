// function getFinalPrice(price: number, discount: number) {
//   return price - price / discount;
// }

// console.log(getFinalPrice(100, 10));

// JS Function
// function calcTax(state, income, dependents) {
//   if (state === 'NY') {
//     return income * 0.06 - dependents * 500;
//   } else if (state === 'NJ') {
//     return income * 0.05 - dependents * 300;
//   }
// }


// let tax = calcTax('NJ', 50000, 2)
// console.log(tax)


function calcTax(state: string, income: number, dependents: number) : number | undefined { 
  if (state === 'NY') {
    return income * 0.06 - dependents * 500;
  } else if (state === 'NJ') {
    return income * 0.05 - dependents * 300;
  }
}


let tax = calcTax('NJ', 50000, 2)
console.log(tax)