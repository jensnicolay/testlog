import { compileModuleTuples, compileToModule, sanityCheck } from './test-common.js';

const src = `

(rule [Rsum x #:sum y]
  [I x z] [J z y])

(rule [Rmax x #:max y]
  [I x z] [J z y])

  `;


compileToModule(src, 'standalone', {debug:true, assertions:true}).then(module => {
//import('./compiled/standalone.mjs').then(module => {

module.addTuples(compileModuleTuples(module, `[I 'a 'aa] [J 'aa 10] [J 'bb 20] [I 'a 'bb]`));
console.log("tuples: " + [...module.tuples()].join('\n'));
console.log("roots: " + [...module.rootTuples()].join('\n'));
// sanityCheck(module); // reachableTuples is not always equal to members

// console.log("\n\n\n");
// module.removeTuples(compileModuleTuples(module, `[Link "a" "b"]`).map(t => t.get())); 
// console.log("tuples: " + [...module.tuples()].join('\n'));
// sanityCheck(module);
})

