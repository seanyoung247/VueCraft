
<template>

    <div class="block" :style="blockStyle">
        <div v-for="face in faces" :key="face" :class="`face ${face}`"></div>
    </div>

</template>

<script setup lang="ts">
    import { computed } from "vue"

    const props = defineProps({
        size: { type: Number, default: 200 },
        faces: { type: Array<string>, default: () => [
            "front", "back", "left", "right", "top", "bottom"
        ] }
    })

    const blockStyle = computed(() => ({
        "--size": `${props.size}px`,
    }))
</script>

<style>
    .block {
        --offset: calc(var(--size) / 2);

        width: var(--size);
        height: var(--size);
        position: relative;
        transform-style: preserve-3d;
        
        animation: test-rotate 5s infinite linear;
    }

    .block > .face {
        position: absolute;
        inset: 0;
        background: red;
        opacity: 0.75;
        border: 1px solid black;
    }

    .block > .face.front { transform: rotateY(0deg) translateZ(var(--offset)); }
    .block > .face.back { transform: rotateY(180deg) translateZ(var(--offset)); }
    .block > .face.left { transform: rotateY(90deg) translateZ(var(--offset)); }
    .block > .face.right { transform: rotateY(270deg) translateZ(var(--offset)); }
    .block > .face.top { transform: rotateX(90deg) translateZ(var(--offset)); }
    .block > .face.bottom { transform: rotateX(180deg) translateZ(var(--offset)); }

    @keyframes test-rotate {
        from {
            transform: rotateX(0deg) rotateY(0deg); 
        }
        to {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

</style>