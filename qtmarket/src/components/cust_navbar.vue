<style>
h1, h2, h3, h4, h5, h6, span, p {
    font-family: "Amatica SC";
    color: #382C38
}

span {
    font-size: 24px;
}

.navbar {
    background-color: #DACEDD;
    min-height: 50px;
    box-shadow: 0px 4px 10px 0px #CCBEC1;
}

.logo {
    width: 122px;
    border-radius: 5px;
}

.nav_icons {
    width: 40px;
    margin-left: 10px;
}

.search_bar {
    background-color: #FDF5FF;
    width: 250px;
    border-radius: 10px;
}

.search_icon {
    width: 20px;
}

</style>


<template>
    <div class = 'navbar row'>
        <div class = 'col-5'>
            <img src = '../img/icons/user.png' class = 'nav_icons mx-3'>
            <span class = 'align-middle'>Jaycia Tan</span>
        </div>

        <div class = 'col-2 d-flex justify-content-center'>
            <img src = '../img/logo2.png' class = 'logo align-middle'>
        </div>

        <div class = 'col-3'>
            <div class="search_bar d-flex">
                <input type="text" class="form-control search_bar border-0" placeholder="Search">

                <button class="btn">
                    <img src = '../img/icons/search.png' class = 'search_icon'>
                </button>    
            </div>
        </div>
        <div class = 'col-2 d-flex justify-content-end me-3'>
            <img src = '../img/icons/cart.png' class = 'nav_icons'>
            <img src = '../img/icons/info.png' class = 'nav_icons'>
        </div>
        
        
    </div>
</template>


<script>
import '../css/main.css'


export default {
    data() {
        return {
        }
    },

    components: {
    },
}
</script>