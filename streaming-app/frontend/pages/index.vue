<template>
    <div>
        <Video :videolist="videos"/>
    </div>
</template>
<script>
import Video from "@/components/Video.vue"
export default {
    components: {
        Video
    },
    head: {
        title: "Home"
    },
    data(){
        return {
            videos: []
        }
    },
    async fetch() {
        this.videos = await fetch(
            'http://localhost:5100/videos'
        ).then(res => res.json())
    }
}
</script>