let marvel_hero=["Thor","Loki","Iron-Man"];
let indian_hero=["Saktimaan","NaagRaj"]
console.log(typeof marvel_hero)
// marvel_hero.push(indian_hero)
// console.log(marvel_hero)

let newHero=marvel_hero.concat(indian_hero)
//console.log(newHero)

const collectHero=[...indian_hero,...marvel_hero]
//console.log(collectHero)
let score1=100,score2=200,score3=300
console.log(Array.isArray("hero"))
console.log(Array.from("hero"))
console.log(Array.of(score1,score2,score3))