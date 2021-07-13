<template>
    <div>
        <div class="container">
            <div v-for="(video,id) in videolist"
                :key="id"
                class="vid-on">
                <NuxtLink :to="`/player/${video.id}`">
                    <div 
                    :style="{
                        backgroundImage:`url(${video.poster})`
                    }"
                    class="vid"></div>
                    <div class="movie-info">
                        <div class="details">
                            <h2>{{video.name}}</h2>
                            <p>{{video.duration}}</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>       
    </div>
</template>
<script>
export default {
    props:['videolist'],
}
</script>
<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
    .vid-con {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        justify-content: center;
        width: 50%;
        max-width: 16rem;
        margin: auto 2em;
    }
    .vid {
        height: 15rem;
        width: 100%;
        background-position: center;
        background-size: cover;
    }
    .movie-info {
        background: black;
        color: white;
        width: 100%;
    }
    .details {
        padding: 16px 20px;
    }
</style>