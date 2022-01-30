<template>
    <hr
        class="border-0"
        :class="computedClass" 
        :style="{ backgroundImage: color }">
</template>

<script>
    export default {
        name: 'Border',
        props: {
            size: String,
            color: {
                type: String,
                default: '#F1F0EF'
            }
        },
        data() {
            return {
                baseClass: 'h-[1px]',
                lgClass: 'h-[2px]',
            }
        },
        computed: {
            computedClass() {
                switch (this.size) {
                    case 'base':
                        return this.baseClass;
                
                    case 'lg':
                        return this.lgClass;
                }
            }
        }
    };
</script>