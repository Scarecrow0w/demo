<template>
    <span :class="size === 'sm' ? 'text-sm' : ''" 
        class="inline-flex items-center gap-2 font-medium cursor-pointer text-grey-800">
        <Info v-if="icon === 'info'" color="#C2C0BF" :size="size" />
        <Heart v-else-if="icon === 'heart'" color="#C2C0BF" :size="size" />
        <List v-else-if="icon === 'list'" color="#C2C0BF" :size="size" />
        <Search v-else-if="icon === 'search'" color="#C2C0BF" :size="size" />
        <Share v-else-if="icon === 'share'" color="#C2C0BF" :size="size" />
        <Star v-else-if="icon === 'star'" color="#C2C0BF" :size="size" />
        {{ text }}
    </span>
</template>

<script>
    import Info from "../icons/Info.vue";
    import Heart from "../icons/Heart.vue";
    import List from "../icons/List.vue";
    import Search from "../icons/Search.vue";
    import Share from "../icons/Share.vue";
    import Star from "../icons/Star.vue";

    export default {
        name: "Action",
        props: ['size', 'icon', 'text'],
        components: {
            Info,
            Heart,
            List,
            Search,
            Share,
            Star
        }
    };
</script>
