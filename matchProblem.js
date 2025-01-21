const sentence= "Bangladesh is a vibrant and culturally rich country in South Asia, bordered by India, Myanmar, and the Bay of Bengal. Known for its lush greenery and extensive waterways,bangladesh is home to the world's largest mangrove forest, the Sundarban, and the majestic Royal Bengal Tiger. With a history steeped in resilience, Bangladesh gained independence in 1971 and has since made remarkable progress in various sectors."

const matches =sentence.match(/bangladesh/gi);
const count=matches.length
console.log(matches)
console.log(count)

let position = sentence.search(/bangladeshi/gi)

position = position >= 0 ? position : "not found" //bangladeshi in not found,if remove i ,output will be 0.

console.log(position)