<template>
    <div class="flex rounded-[20px] flex-col p-6 shadow-xs">
        <PriceAtom :type="priceAtom.type" size="lg" :price="priceAtom.price" />
        <ButtonAtom class="mt-7" text="Добавить в корзину" type="primary" size="base" />
        <ButtonAtom class="mt-2" text="Добавить в список" type="outline" size="base" />
        <div class="mt-[26px] flex justify-between items-center">
            <ActionBagde icon="heart" size="sm" color="#A3A2A1" text="В избранное" />
            <ActionBagde icon="search" size="sm" color="#A3A2A1" text="Найти похожее" />
        </div>
    </div>
</template>

<script>
    import PriceAtom from "../atoms/prices/Price.vue"
    import ButtonAtom from "../atoms/buttons/Button.vue"
    import ActionBagde from "../atoms/badges/Action.vue"

    export default {
        name: "OfferBox",
        props: {
            priceAtom: Object
        },
        components: {
            PriceAtom,
            ButtonAtom,
            ActionBagde
        }
    }
</script>
