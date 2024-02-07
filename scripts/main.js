import { getFish, getTips } from './database.js'
import { FishList } from './fish/FishList.js'
import { travelList } from './locations/locationList.js'
import { tipList } from './tips/tips_tank_care.js'

const allFish = getFish()
const allTips = getTips()

for (const fish of allFish) {
    console.log(fish)
}

for (const tip of allTips) {
    console.log(tip)
}

const parentHTMLElement = document.querySelector(".container")

const parentHTMLElementTips = document.querySelector(".Tips_Container")

const parentHTMLElementTravel = document.querySelector(".Travel_Container")


parentHTMLElement.innerHTML = FishList()
parentHTMLElementTips.innerHTML = tipList()
parentHTMLElementTravel.innerHTML = travelList()

