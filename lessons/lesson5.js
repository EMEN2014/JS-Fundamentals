// Logical "AND" Operator
// console.log(true&&true) //all values have to be TRUE for expression to be TRUE
// console.log(true&&false) //where one value is NOT TRUE, expression will be FALSE

// Logical "OR" Operator
// console.log(true||false) //any value should be TRUE for the expression to be TRUE
// console.log(false || false)

//Requirement: RSA Citizen Eligibility for Driver License
var ageIsMoreThanEighteen = false //true
var isZACitizen = true

// var eligibilityForDriversLicense = ageIsMoreThanEighteen && isZACitizen //'AND' Operator 
// console.log('This person is eligible for DL: ' + eligibilityForDriversLicense)

var eligibilityForDriversLicense = ageIsMoreThanEighteen || isZACitizen //"OR" Operator
// console.log('This person is eligible for DL: ' + eligibilityForDriversLicense)

//Logical "NOT" Operator
// console.log(!true) //Works opposite to "AND" operator with the TRUE expression, i.e. true vs !true 
console.log(6 !== 10)
