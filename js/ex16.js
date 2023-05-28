// https://csx.codesmith.io/units/precourse-part-2/challenge-objects-adding-properties

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE

for (let i = 0; i < possibleIterable.length; i++) {
    if (possibleIterable[i] % 3 === 0) {
      divByThree[possibleIterable[i]] = i;
    }
  }
  
console.log(divByThree);
