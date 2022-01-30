<template>
    <div :class="computedClass"
        class="flex flex-1 w-full h-full bg-center bg-no-repeat "
        :style="{ backgroundImage: 'url(' + src + ')' }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Image',
        props: ['type', 'src'],
        data() {
            return {
                scaleClass: 'bg-cover',
                centerClass: 'bg-contain'
            }
        },
        computed: {
            computedClass() {
                switch (this.type) {
                    case 'scale':
                        return this.scaleClass;
                
                    case 'center':
                        return this.centerClass;
                }
            }
        }
    }
</script>