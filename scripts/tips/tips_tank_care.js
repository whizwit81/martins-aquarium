import {getTips} from '../database.js'

const allTips = getTips()



export const tipList = () => {
    
   
    let htmlString = '<article class="tipList">'
                            
    for (const tips of allTips) {

        htmlString += `<div class="Tip_Card">${tips.tip}</div>
                
`
    }
    htmlString += `</article>`

    return htmlString
}
  