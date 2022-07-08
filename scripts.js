let draw = SVG('placement').size(500, 500)

let rect1 = draw.rect(200,100).attr({fill: "#f03"})
let rect2 = draw.rect(100,200).attr({fill: "#0f5"})
let rect3 = draw.rect(200,100).attr({fill: "#4af"}).y(100)

rect1.before(rect3)