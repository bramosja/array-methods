const outEl = document.querySelector("#output");
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    let agentInfo = {
    "fullName": `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
    "company": business.companyName,
    "phoneNumber": business.phoneWork
    };
    return agentInfo;
});

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `
    <h2>${agent.fullName}</h2>
    <section>${agent.company}</section>
    <section>Contact: ${agent.phoneNumber}</section>
  `;
  outEl.innerHTML += "<hr/>";
});