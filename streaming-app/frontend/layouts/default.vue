<template>
    <div>
        <Navbar/>

        <nuxt/>
    </div>
</template>
<script>
// nuxt will display the navbar everywhere in the page.
import NavBar from "@/components/NavBar.vue"
export default {
    components : {
            NavBar,
    }
}

</script>
