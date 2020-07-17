const spagetti = require("./momsSpagettiCarl");

const original = spagetti.momsSpagetti();
spagetti.momsSpagettiAsync().then( refactor => {
    console.log(refactor);
    original === refactor ? console.log("\nTEST PASS") : console.log("\nTEST FAIL");
});
