<style>
</style>

<template>
    <navbar></navbar>
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

    mounted() {
        var stuff = window.location.search;
        var urlParams = new URLSearchParams(stuff);
        console.log(urlParams.get('value'))
    }
}
</script>