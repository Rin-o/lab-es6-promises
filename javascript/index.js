// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// ...

// Iteration 2 - using promises

// Iteration 2 - using promises
let primerFunction = obtainInstruction("steak", 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    return obtainInstruction("steak", 7);
   })

  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })


// Iteration 3 using async/await
async function makeBroccoli() {

  let broccoli0 = await obtainInstruction("broccoli", 0); document.querySelector("#broccoli").innerHTML += `<li>${broccoli0}</li>`;
  console.log(broccoli0);

  let broccoli1 = await obtainInstruction("broccoli", 1); document.querySelector("#broccoli").innerHTML += `<li>${broccoli1}</li>`;

  let broccoli2 = await obtainInstruction("broccoli", 2); document.querySelector("#broccoli").innerHTML += `<li>${broccoli2}</li>`;

  let broccoli3 = await obtainInstruction("broccoli", 3); document.querySelector("#broccoli").innerHTML += `<li>${broccoli3}</li>`;

  let broccoli4 = await obtainInstruction("broccoli", 4); document.querySelector("#broccoli").innerHTML += `<li>${broccoli4}</li>`;

  let broccoli5 = await obtainInstruction("broccoli", 5); document.querySelector("#broccoli").innerHTML += `<li>${broccoli5}</li>`;

  let broccoli6 = await obtainInstruction("broccoli", 6); document.querySelector("#broccoli").innerHTML += `<li>${broccoli6}</li>`;

  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

  document.querySelector("#broccoliImg").removeAttribute("hidden");

}
makeBroccoli();

// ...

// Bonus 2 - Promise all
const withPromiseAll = () => {
  const allPromises = [];
  brusselsSprouts.forEach((_, stepIndex) => {
      allPromises.push(obtainInstructions(stepIndex));
  });
  console.log(allPromises);

};

withPromiseAll();