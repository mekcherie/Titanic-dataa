let data = require('./titanic-passengers.json');
// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Return a number.

function getTotalPassengers(data) {
	const numPassengers = data.length
	return "Number of passengers: " + numPassengers
}
console.log(getTotalPassengers(data))

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

function getSurvivorCount(data) {
	const survivedPassengers = data.filter((passenger) => 
		passenger.fields.survived === 'Yes'
	)
	return "Number of passengers that survived: " + survivedPassengers.length
}
console.log(getSurvivorCount(data))

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

function getCasualityCount(data) {
	const deadPassengers = data.filter((passenger) => 
		passenger.fields.survived === 'No'
	)
	return "Number of passengers that died: " + deadPassengers.length
}
console.log(getCasualityCount(data))

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Fins all of the 
// passengers whose pclass matches and return the count. 
// Return a number

function countPassengersInClass(data, pclass) {
	const classPassengers = data.filter((passenger) => 
		passenger.fields.pclass == (pclass)
	)
	return `Number of passengers in class ${pclass}: ${classPassengers.length}`
}
console.log(countPassengersInClass(data, "3"))

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. Return only passengers  

function getSurvivorCountForClass(data, pclass) {
	const survivedPassengersClass = data.filter((passenger) => 
		passenger.fields.pclass == (pclass)
	).filter((passenger) => 
	passenger.fields.survived === 'Yes'
	)
	return `Number of passengers in class ${pclass} that survived: ${survivedPassengersClass.length}`
}
console.log(getSurvivorCountForClass(data, "3"))

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

function getCasualityCountForClass(data, pclass) {
	const deadPassengersClass = data.filter((passenger) => 
		passenger.fields.pclass == (pclass)
	).filter((passenger) => 
	passenger.fields.survived === 'No'
	)
	return `Number of passengers in class ${pclass} that died: ${deadPassengersClass.length}`
}
console.log(getCasualityCountForClass(data, "3"))

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

function getMinAge(data) {
	const agePassengers = data.filter((passenger) => 
	passenger.fields.age != null).map(passenger => passenger.fields.age)
	const ageMin = Math.min(...agePassengers)
	return `Age of the youngest passenger: ${ageMin}`
}
console.log(getMinAge(data))

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. 

function getMaxAge(data) {
	const agePassengers = data.filter((passenger) => 
	passenger.fields.age != null).map(passenger => passenger.fields.age)
	const ageMax = Math.max(...agePassengers)
	return `Age of the oldest passenger: ${ageMax}`
}
console.log(getMaxAge(data))

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. 

function getEmbarkedCount(data, embarked) {
	const embarkPassengers = data.filter((passenger) => 
		passenger.fields.embarked == (embarked)
	)
	return `Number of passengers that embarked at ${embarked}: ${embarkPassengers.length}`
}
console.log(getEmbarkedCount(data, "Q"))

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out! 

function getMinFare(data) {
	const farePassengers = data.filter((passenger) => 
	passenger.fields.fare != null).map(passenger => passenger.fields.fare)
	const fareMin = Math.min(...farePassengers)
	return `Minimum fare paid by a passenger: ${fareMin}`
}
console.log(getMinFare(data))

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare.

function getMaxFare(data) {
	const farePassengers = data.filter((passenger) => 
	passenger.fields.fare != null).map(passenger => passenger.fields.fare)
	const fareMax = Math.max(...farePassengers).toFixed(2)
	return `Maximum fare paid by a passenger: ${fareMax}`
}
console.log(getMaxFare(data))

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. 

function getPassengersByGender(data, gender) {
	const sexPassenger = data.filter((passenger) => 
		passenger.fields.sex == (gender)
	)
	return `Number of ${gender} passengers: ${sexPassenger.length}`
}
console.log(getPassengersByGender(data, "female"))

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. 

function getSurvivorsByGender(data, gender) {
	const survivedPassengersSex = data.filter((passenger) => 
		passenger.fields.sex == (gender)
	).filter((passenger) => 
	passenger.fields.survived === 'Yes'
	)
	return `Number of ${gender} passengers that survived: ${survivedPassengersSex.length}`
}
console.log(getSurvivorsByGender(data, "female"))

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

function getCasualitiesByGender(data, gender) {
	const deadPassengersSex = data.filter((passenger) => 
		passenger.fields.sex == (gender)
	).filter((passenger) => 
	passenger.fields.survived === 'No'
	)
	return `Number of ${gender} passengers that died: ${deadPassengersSex.length}`
}
console.log(getCasualitiesByGender(data, "male"))

// // 15 --------------------------------------------------------------
// // Return the total of all fares paid. 

// function getTotalFare(data) {
// 	return 0
// }

// // 16 --------------------------------------------------------------
// // Return the average fare paid.

// function getAverageFare(data) {
// 	return 0
// }

// // 17 --------------------------------------------------------------
// // Return the median fare. The median is the value equal distance
// // from the minimum and maximum values. 

// function getMedianFare(data) {
// 	return 0
// }

// // 18 --------------------------------------------------------------
// // Return the average age of all passengers. 

// function getAverageAge(data) {
// 	return 0
// }

// 19 --------------------------------------------------------------
// Return the median age from passengers. 

function getMedianAge(data) {
	const agePassengers = data.filter((passenger) => 
	passenger.fields.age != null
	).map(passenger => passenger.fields.age
	).sort((a,b) => a - b)
	const ageMedian = agePassengers[agePassengers.length/2]
	return `Median age of a passenger: ${ageMedian}`
}
console.log(getMedianAge(data))

// 20 --------------------------------------------------------------
// 

function getAverageAgeByGender(data, gender) {
	const agePassengerSex = data.filter((passenger) => 
		passenger.fields.sex == (gender)
	).filter((passenger) => 
	passenger.fields.age != null
	).map(passenger => passenger.fields.age)
	const ageAverage = (agePassengerSex.reduce((age, p) => age + p, 0))/agePassengerSex.length
	return `Average age of ${gender} passengers: ${ageAverage}`
}
console.log(getAverageAgeByGender(data, "male"))
console.log(getAverageAgeByGender(data, "female"))

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports.getTotalPassengers = getTotalPassengers
module.exports.getSurvivorCount = getSurvivorCount
module.exports.getCasualityCount = getCasualityCount
// module.exports.getUniqueValues = getUniqueValues
module.exports.countPassengersInClass = countPassengersInClass
module.exports.getSurvivorCountForClass = getSurvivorCountForClass
module.exports.getCasualityCountForClass = getCasualityCountForClass
module.exports.getMinAge = getMinAge
module.exports.getMaxAge = getMaxAge
module.exports.getEmbarkedCount = getEmbarkedCount
module.exports.getMaxFare = getMaxFare
module.exports.getMinFare = getMinFare
module.exports.getPassengersByGender = getPassengersByGender
module.exports.getSurvivorsByGender = getSurvivorsByGender
module.exports.getCasualitiesByGender = getCasualitiesByGender
// module.exports.getSurvivorsByPClass = getSurvivorsByPClass
// module.exports.getCasualitiesByPClass = getCasualitiesByPClass
// module.exports.getTotalFare = getTotalFare
// module.exports.getAverageFare = getAverageFare
// module.exports.getMedianFare = getMedianFare
// module.exports.getAverageAge = getAverageAge
module.exports.getMedianAge = getMedianAge
module.exports.getAverageAgeByGender = getAverageAgeByGender