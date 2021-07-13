<template>
    <div class="player">
        <video controls muted autoPlay>
            <source :src="`http://localhost:5100/videos/video/${vidName}`" type="video/mp4">
        </video>
    </div>
</template>
<script>
export default {
    data(){
        return {
            vidName: ''
        }
    },
    mounted(){
        this.vidName = this.$route.params.name
    }
}
</script>
<style scoped>
.player {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
}
</style>