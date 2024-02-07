import {getTravel} from '../database.js'

const allTravel = getTravel()



export const travelList = () => {
    
    
    let htmlString = '<article class="travelList">'
                            
    for (const travel of allTravel) {

        htmlString += `<div class="Tip_Card_Master">
                        <div class="Tip_Card_Place"><img src="${travel.image}" /></div>
                        <div class="Tip_Card_Place"><span class = "text_bold">${travel.place}</div>
                        <div class="Tip_Card_Quote">${travel.quote}</div>
                        </div>
          
`
    }
    htmlString += `</article>`

    return htmlString
}