
import { ref, computed } from "vue"
import type { Point2D } from "@/types"

export const usePoint = (initial: Point2D = {x:0,y:0}) => {
    const point = ref<Point2D>(initial)

    return {
        point,
        
        set(newPoint: Point2D) {
            point.value = newPoint
        },

        distanceTo(other: Point2D): number {
            return Math.hypot(point.value.x - other.x, point.value.y - other.y)
        },

        asVector: computed(() => ({
            x: point.value.x,
            y: point.value.y,
        }))
    }
}