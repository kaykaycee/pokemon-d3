d3.csv("pokemon150.csv", function(data) {

  // 15 pokemon types
  let bugCount = 0
  let dragonCount = 0
  let electricCount = 0
  let fairyCount = 0
  let fightingCount = 0
  let fireCount = 0
  let grassCount = 0
  let ghostCount = 0
  let groundCount = 0
  let iceCount = 0
  let normalCount = 0
  let poisonCount = 0
  let psychicCount = 0
  let rockCount = 0
  let waterCount = 0

  // find all pokemon belonging to each type

  let bug = data.filter(p => p.Type1 === "Bug" )
  bug.forEach(p => {
    // console.log(p.Name)
    bugCount++
  })

  let dragon = data.filter(p => p.Type1 === "Dragon" )
  dragon.forEach(p => {
    // console.log(p.Name)
    dragonCount++
  })

  let electric = data.filter(p => p.Type1 === "Electric" )
  electric.forEach(p => {
    // console.log(p.Name)
    electricCount++
  })

  let fairy = data.filter(p => p.Type1 === "Fairy" )
  fairy.forEach(p => {
    // console.log(p.Name)
    fairyCount++
  })

  let fighting = data.filter(p => p.Type1 === "Fighting" )
  fighting.forEach(p => {
    // console.log(p.Name)
    fightingCount++
  })

  let fire = data.filter(p => p.Type1 === "Fire" )
  fire.forEach(p => {
    // console.log(p.Name)
    fireCount++
  })

  let grass = data.filter(p => p.Type1 === "Grass" )
  grass.forEach(p => {
    // console.log(p.Name)
    grassCount++
  })

  let ghost = data.filter(p => p.Type1 === "Ghost" )
  ghost.forEach(p => {
    // console.log(p.Name)
    ghostCount++
  })

  let ground = data.filter(p => p.Type1 === "Ground" )
  ground.forEach(p => {
    // console.log(p.Name)
    groundCount++
  })

  let ice = data.filter(p => p.Type1 === "Ice" )
  ice.forEach(p => {
    // console.log(p.Name)
    iceCount++
  })

  let normal = data.filter(p => p.Type1 === "Normal" )
  normal.forEach(p => {
    // console.log(p.Name)
    normalCount++
  })

  let poison = data.filter(p => p.Type1 === "Poison" )
  poison.forEach(p => {
    // console.log(p.Name)
    poisonCount++
  })

  let psychic = data.filter(p => p.Type1 === "Psychic" )
  psychic.forEach(p => {
    // console.log(p.Name)
    psychicCount++
  })

  let rock = data.filter(p => p.Type1 === "Rock" )
  rock.forEach(p => {
    // console.log(p.Name)
    rockCount++
  })

  let water = data.filter(p => p.Type1 === "Water" )
  water.forEach(p => {
    // console.log(p.Name)
    waterCount++
  })

  console.log("Total: ", (bugCount + dragonCount + electricCount + fairyCount + fightingCount + fireCount + grassCount + ghostCount + groundCount + iceCount + normalCount + poisonCount + psychicCount + rockCount + waterCount ) )

  let type = ["Bug", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Grass", "Ghost", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Water"]

  let count = [bugCount, dragonCount, electricCount, fairyCount, fightingCount, fireCount, grassCount, ghostCount, groundCount, iceCount, normalCount, poisonCount, psychicCount, rockCount, waterCount]

  let d = []
  for (let i = 0; i < type.length; i++) {
    d.push({"type": type[i], "count": count[i]})
  }

  console.log(count)
  var svg = d3.select("svg")

  var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  var circle = svg.selectAll("circle")
    .data(count)
    .enter().append("circle")
    .style("fill", function(d, i ) { return colorScale(d); })
    .attr("cy", 60)
    .attr("cx", function(d, i) { return i * 50 + 30; })
    .attr("r", function(d) { return Math.sqrt(d * 30); });











})
