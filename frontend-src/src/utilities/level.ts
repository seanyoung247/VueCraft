
import type { LevelDesc } from "../testlevel";
import type { Point } from "./types";

const defaultTile = {
    texture: 0, 
    passable: false
}

export default class Level {
    #level
    constructor(level: LevelDesc) {
        this.#level = level
    }

    get level() { return this.#level }

    inBounds(tile:Point):boolean {
        return (
            tile.x >= 0 && tile.x < this.#level.width &&
            tile.y >= 0 && tile.y < this.#level.height
        )
    }

    getTile(tile:Point) {
        if (!this.inBounds(tile)) return defaultTile
        return this.#level.tiles[tile.y][tile.x]
    }
    getPassable(tile:Point) {
        if (!this.inBounds(tile)) return false
        return this.#level.tiles[tile.y][tile.x].passable
    }
}