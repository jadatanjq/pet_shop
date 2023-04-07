<style>

.profile {
    background-color: #382C38;
    color: #FCEBEF;
    height: 600px;
    border-radius: 20px;
}

.tabs {
    background-color: #BBA9BF;
    height: 550px;
    border-radius: 0px 20px 20px 20px;
}

.tab_active {
    background-color: #BBA9BF;
    color: #382C38;
    border-radius: 12px 12px 0px 0px ;
}

.tab_inactive {
    background-color: #382C38;
    color: #FCEBEF;
    border-radius: 12px 12px 0px 0px ;
}

.profile_body {
    margin: 30px;
}

</style>

<template>
    <navbar></navbar>
    <div class = 'container-fluid'>
        <div class = 'row profile_body d-flex justify-content-around align-items-end'>
            <div class = 'col-3 profile py-3 '>
                <div class = 'row d-flex justify-content-center'>
                    <span class = 'font_light'>profile information</span>
                </div>
                <div class = 'row'>
                    <div class = 'col'>
                        <h5 class = 'font_light'>name: {{ name }}</h5>
                        <h5 class = 'font_light'>address:</h5>
                        <h5 class = 'font_light text-center'>{{ address }}</h5>
                    </div>
                </div>

            </div>

            <div class = 'col-7'>
                <div class = 'row float-left'>
                    <div class = 'col p-0 d-flex align-items-end'>
                        <span class = 'tab_active px-2'>orders</span>
                    </div>
                    <div class = 'col p-0 d-flex align-items-end'>
                        <span class = 'tab_inactive px-2'>chat</span>
                    </div>
                    <div class = 'col p-0 d-flex align-items-end'>
                        <span class = 'tab_inactive px-2'>updates</span>
                    </div>
                    <div class = 'col p-0 d-flex align-items-end'>
                        <span class = 'tab_inactive px-2'>likes</span>
                    </div>
                </div>
                <div class = 'row tabs'>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from "@/components/cust_navbar.vue"

export default {
    data() {
        return {
            name: 'aprile faith',
            address: 'jln jurong kechil singapore 598674',
        }
    },

    components: {
        navbar,
    },
}
</script>