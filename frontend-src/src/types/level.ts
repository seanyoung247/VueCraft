
import type { LevelDesc } from "../testlevel";
import type { Point2D } from "./geometry";

const defaultTile = () => ({
    texture: 0, 
    passable: false
})

export class Level {
    #level: LevelDesc
    constructor(level: LevelDesc) {
        this.#level = level
    }

    get level() { return this.#level }

    inBounds(tile:Point2D): boolean {
        return (
            tile.x >= 0 && tile.x < this.#level.width &&
            tile.y >= 0 && tile.y < this.#level.height
        )
    }

    getTile(tile:Point2D) {
        if (!this.inBounds(tile)) return defaultTile()
        return this.#level.tiles[tile.y][tile.x]
    }
    getPassable(tile:Point2D): boolean {
        if (!this.inBounds(tile)) return false
        return this.#level.tiles[tile.y][tile.x].passable
    }
}