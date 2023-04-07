<style>

</style>


<template>
    <div class = 'navbar row'>
        <div class = 'col-3'>
            <router-link to="/profile" class="routing">
                <img src = '../img/icons/user.png' class = 'nav_icons mx-3'>
                <span class = 'align-middle'>Jaycia Tan</span>
            </router-link>
        </div>

        <div class = 'col-2'></div>

        <div class = 'col-2 d-flex justify-content-center'>
            <router-link to="/" class="routing">
                <img src = '../img/logo2.png' class = 'logo align-middle'>
            </router-link>
        </div>

        <div class = 'col-4 d-flex justify-content-center'>
            <div class="row search_bar py-1">
                <div class = 'col-9'>
                    <input type="text" class="search_text" v-model = "search_item" placeholder="Search">
                </div>
                <div class = 'col-3 d-flex justify-content-center'>
                    <button class="btn p-0" @click = "search">
                        <img src = '../img/icons/search.png' class = 'search_icon'>
                    </button>       
                </div>
            </div>
        </div>
        <div class = 'col-1 p-0 align-content-center d-flex justify-content-around'>
            <router-link to="/cart" class="routing">
                <img src = '../img/icons/cart.png' class = 'nav_icons'>
            </router-link>
            <router-link to="/info" class="routing">
                <img src = '../img/icons/info.png' class = 'nav_icons'>
            </router-link>
        </div> 
        
        
    </div>

</template>


<script>

export default {
    data() {
        return {
            search_item: '',

        }
    },

    components: {
    },

    methods: {
        search(){
            console.log(this.search_item)
        },
    }
}
</script>