<template>
    <div v-if="base"
        class="flex py-[13px] justify-between border-t border-grey-200">
        <ActionBadge size="sm" icon="heart" text="В избранное" />
        <ActionBadge size="sm" icon="search" text="Похожее" />
        <ActionBadge size="sm" icon="share" text="Поделиться" />
    </div>
    <div v-else-if="sm"
        class="flex justify-around py-4 border-t border-grey-200">
        <HeartAtom size="sm" color="#C2C0BF" />
        <SearchAtom size="sm" color="#C2C0BF" />
        <ShareAtom size="sm" color="#C2C0BF" />
    </div>
</template>

<script>
    import HeartAtom from "../atoms/icons/Heart.vue";
    import SearchAtom from "../atoms/icons/Search.vue";
    import ShareAtom from "../atoms/icons/Share.vue";
    import ActionBadge from "../atoms/badges/Action.vue";

    export default {
        name: "Media",
        components: {
            HeartAtom,
            SearchAtom,
            ShareAtom,
            ActionBadge
        }, 
        data() {
            return {
                base: false,
                sm: false,
            };
        },
        methods: {
            handleView() {
                if (window.innerWidth >= 320 && window.innerWidth <= 359) {
                    this.sm = true;
                    this.base = false;
                } else if (window.innerWidth >= 360 && window.innerWidth <= 1023) {
                    this.base = true;
                    this.sm = false;
                } else {
                    this.base = false;
                    this.sm = false;
                }
            }
        },
        created() {
            this.handleView();
            window.addEventListener("resize", this.handleView);
        },
        destroyed() {
            window.removeEventListener("resize", this.handleView);
        }
    }
</script>