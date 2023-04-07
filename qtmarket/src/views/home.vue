<style>
.reco {
    height: 450px;
    width: 600px;
}

.reco_img {
    height: 450px;
}


</style>

<template>
    <navbar></navbar>
    <div class = 'container'>
        <div class = 'slide'>
            <h3 class = 'text-center'>top sellers</h3>
            <div class = 'row d-flex justify-content-center'>
                <div id="topSellers" class="carousel slide reco" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#topSellers" data-slide-to="0" class="active"></li>
                        <li data-target="#topSellers" data-slide-to="1"></li>
                        <li data-target="#topSellers" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100 reco_img" src="../img/products/curvebridge.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 reco_img" src="../img/products/foodsprays.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 reco_img" src="../img/products/natural bedding.jpg" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#topSellers" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#topSellers" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>            
        </div>

        <div>
            <h3 class = 'text-center'>recommended products</h3>
            <div class = 'row d-flex justify-content-center'>
                <div id="recomendations" class="carousel slide reco" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#recomendations" data-slide-to="0" class="active"></li>
                        <li data-target="#recomendations" data-slide-to="1"></li>
                        <li data-target="#recomendations" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100 reco_img" src="../img/products/curvebridge.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 reco_img" src="../img/products/foodsprays.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 reco_img" src="../img/products/natural bedding.jpg" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#recomendations" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#recomendations" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
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
        }
    },

    components: {
        navbar,
    },
}
</script>