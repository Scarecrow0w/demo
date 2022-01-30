<template>
    <div class="flex flex-col gap-2">
        <HeadingAtom tag="h3" :size="headingSize" :title="heading" />
        <div class="flex gap-2">
            <div class="flex gap-1">
                <StarAtom v-for="item in 5" :key="item" :size="starSize" :color="starColor" />
            </div>
            <LinkAtom 
                :link="linkAtom.link"
                :size="linkSize" />
            <div v-if="size === 'xs'" 
                class="flex gap-[6px]">
                <ListAtom 
                    class="ml-[19px]"
                    size="sm"
                    color="#496B9B" />
                <LinkAtom
                    :link="linkAtom.listLink"
                    :size="linkSize" />
            </div>
        </div>
    </div>
</template>

<script>
    import HeadingAtom from "../../atoms/headings/Heading.vue";
    import LinkAtom from "../../atoms/links/Link.vue";
    import ListAtom from "../../atoms/icons/List.vue";
    import StarAtom from "../../atoms/icons/Star.vue";

    export default {
        name: "Name",
        props: {
            heading: String,
            linkAtom: Object,
            listAtom: Object,
            size: String,
            starColor: String
        },
        components: {
            HeadingAtom,
            LinkAtom,
            ListAtom,
            StarAtom
        },
        data() {
            return {

            }
        },
        computed: {
            headingSize() {
                switch (this.size) {
                    case 'base':
                        return '3xl';
                
                    case 'sm':
                        return '2xl';
                
                    case 'xs':
                        return 'lg';
                }
            },
            starSize() {
                switch (this.size) {
                    case 'base':
                        return 'base';
                
                    case 'sm':
                        return 'sm';
                
                    case 'xs':
                        return 'sm';
                }
            },
            linkSize() {
                switch (this.size) {
                    case 'base':
                        return 'base';
                
                    case 'sm':
                        return 'base';
                
                    case 'xs':
                        return 'sm';
                }
            }
        }
    }
</script>
