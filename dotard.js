const outEl = document.querySelector("#output");
outEl.innerHTML = "<h1>Active Businesses</h1>";
let zipCode = "addressZipCode";

// Use the filter method to get all the big spenders in the main array into a new one.
const bigSpenders = businesses.filter(business => {
  let isBigSpender = false;

  for(let i = 0; i < business.orders.length; i++){
    if (business.orders[i] >= 9000){
      isBigSpender = true;
    }
  }

  return isBigSpender;
})

console.table(bigSpenders);

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY");

console.table(newYorkBusinesses);

const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing");

manufacturingBusinesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
        ${business.addressCity},
        ${business["addressStateCode"]},
        ${business[zipCode]}
    </section>
  `;
  outEl.innerHTML += "<hr/>";
});
