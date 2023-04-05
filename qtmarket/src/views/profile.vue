<style>

.profile {
    background-color: #382C38;
    color: #FCEBEF;
    height: 600px;
}

.tabs {
    background-color: #BBA9BF;
    height: 500px;
}

</style>

<template>
    <navbar></navbar>

    <div class = 'row'>
        <div class = 'col-3 profile text-center my-4 mx-5'>
            <span class = 'font_light'>profile information</span>
        </div>
        <div class = 'col-7 tabs my-4 mx-4'>

        </div>
    </div>
</template>

<script>
import navbar from "@/components/cust_navbar.vue"

export default {
    data() {
        return {
        }
    },

    components: {
        navbar,
    },
}
</script>