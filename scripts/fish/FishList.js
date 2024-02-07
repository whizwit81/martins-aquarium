import {getFish} from '../database.js'

const allFish = getFish()



export const FishList = () => {
    
    let htmlString = '<article class="fishList">'
                            
    for (const fish of allFish) {

        htmlString += `<div class = "fish-details">
            <div class="fish__image"><img src="${fish.image}" /></div>
            <div class="fish__name"><span class = "text_bold">Name: </span>${fish.name}</div>
            <div class="fish__species"><span class = "text_bold">Species: </span>${fish.species}</div>
            <div class="fish__length"><span class = "text_bold">Length in inches: </span>${fish.length}</div>
            <div class="fish__location"><span class = "text_bold">Harvest location: </span>${fish.location}</div>
            <div class="fish__diet"><span class = "text_bold">Favorite foods: </span>${fish.foodType}</div>
        </div>     
`
    }
    htmlString += `</article>`

    return htmlString
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of allFish) {
        if (fish.length % 3 === 0)
            holyFish.push(fish.name)
        }

    return holyFish
}
mostHolyFish()

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of allFish) {
        if (fish.length % 5 === 0)
            soldiers.push(fish.name)
        }

    return soldiers
}

soldierFish()

export const nonHolyFish = () => {
       const regularFish = []
    // Any fish not a multiple of 3 or 5
    for (const fish of allFish) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0)
            regularFish.push(fish.name)
        }

    return regularFish
}

nonHolyFish()