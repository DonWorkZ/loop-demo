// NOTE: A "users" array is already loaded.
// See the "users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
// console.log(users);

//Kata Format on how should print onto the page
function printKata (kataNumber, object) {
 
    const detailsElement = document.createElement('details')
    document.body.append(detailsElement)
    
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    
    object.forEach(item => detailsElement.append(item.name))
}
function printArray (kataNumber, object) {
 
    const detailsElement = document.createElement('details')
    document.body.append(detailsElement)
    
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    
    object.forEach(item => detailsElement.append(item + " "))
}
function printValue (kataNumber, object) {
 
    const detailsElement = document.createElement('details')
    document.body.append(detailsElement)
    
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    
    detailsElement.append(object)
}
// Append the katas to this element:
const main = document.querySelector("main");

//Filter the users array to show only the users with an eyeColor property of "green".Example
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes2)

// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.

const activeusers = users.filter(function (user) {
    return user.isActive === true
})

printKata(1, activeusers)

// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.

const emails = users.map(function (user) {
    return user.email
})

printArray(2, emails)

// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".

const ovations = users.some(function (user) {
    return user.company === "OVATION"
})

printValue(3, ovations)

// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.

const over38 = users.find(function (user) {
    return user.age >= 38
})

printKata(4, [over38])

// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.

const over38active = users.filter(function (user) {
    return user.age >= 38
}).find(function (user) {
    return user.isActive === true
})

printKata(5, [over38active])

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.

const zencobalance = users.filter(function (user) {
    return user.company === "ZENCO"
}).map(function (user) {
    return user.balance
})

printArray(6, zencobalance)


// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.

const fugiatage = users.filter(function (user) {
    return user.tags.includes("fugiat")
}).map(function (user) {
    return user.age
})

printArray(7, fugiatage)