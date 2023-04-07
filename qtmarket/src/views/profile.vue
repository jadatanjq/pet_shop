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
}

.tab_inactive {
    background-color: #382C38;
    color: #FCEBEF;
}

.tab { 
    border-radius: 12px 12px 0px 0px ;
    cursor: pointer;   
    padding-left: 0.5rem;
    padding-right: 0.5rem; 
}

.tab:hover {
    font-size: 26px;
}

.tab:active {
    font-size: 24px;
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
                <div class = 'row d-flex justify-content-center my-5'>
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
                    <div class = 'col p-0 d-flex align-items-end' @click = "changeTab('orders')">
                        <span class = 'tab tab_active'>orders</span>
                    </div>
                    <div class = 'col p-0 d-flex align-items-end' @click = "changeTab('chat')">
                        <span class = 'tab tab_inactive'>chat</span>
                    </div>
                    <div class = 'col p-0 d-flex align-items-end'  @click = "changeTab('updates')">
                        <span class = 'tab tab_inactive'>updates</span>
                    </div>
                    <div class = 'col p-0 d-flex align-items-end'  @click = "changeTab('likes')">
                        <span class = 'tab tab_inactive'>likes</span>
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

    methods: {
        changeTab(item){
            var tabs = document.getElementsByClassName('tab')
            for (var i = 0; i < tabs.length; i++){
                if (tabs[i].className == 'tab tab_active'){
                    tabs[i].className = 'tab tab_inactive'
                }
            }

            for (var i = 0; i < tabs.length; i++){
                if (tabs[i].innerText == item){
                    tabs[i].className = 'tab tab_active'
                }
            }
        },

    }
}
</script>