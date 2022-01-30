<template>
    <Header />
    <div class="mt-10 sm:px-7 base:px-7 max-w-[1472px] mx-auto">
        <ProductDetail 
            :descriptionText="productDetail.descriptionText"
            :ratingLink="productDetail.ratingLink"
            :h2Title="productDetail.h2Title" 
            :h3Title="productDetail.h3Title" 
            :code="productDetail.code" 
            :imageSrc="productDetail.imageSrc" 
            :saleText="productDetail.saleText"
            :buttonText="productDetail.buttonText"
            :actionText="productDetail.actionText"
            :expertText="productDetail.expertText"
            :offerPrice="productDetail.offerPrice" />
    </div>
</template>

<script>
    import ProductDetail from '../organisms/ProductDetail.vue';
    import Header from '../organisms/Header.vue';

    export default {
        name: "ProductCard",
        props: {
            productDetail: Object
        },
        components: {
            Header,
            ProductDetail
        }
    }
</script>