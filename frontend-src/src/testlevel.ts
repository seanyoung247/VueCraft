
const tilesSet = [
    {texture: 0, passable: true},
    {texture: 1, passable: false},
]

const testMap = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

const genMap = (map:number[][], tiles: typeof tilesSet) => {
    return map.map(row => row.map(v => tiles[v]))
}

const testLevel = {
    width: 10,          // Map x dimension in tiles
    height: 10,         // Map y dimension in tiles
    start: {x:0,y:0},   // User spawn coordinates
    tiles: genMap(testMap, tilesSet)
}

export type LevelDesc = typeof testLevel
export type TileDesc = {
    texture: number, 
    passable: boolean
}

export default testLevel