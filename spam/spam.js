let emailArray = []
customers.forEach(customer => {
    customer.contacts.email.forEach(emailAddress =>{
        emailArray.push(emailAddress)
    })
})
console.log(emailArray)
