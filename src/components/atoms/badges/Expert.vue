<template>
    <span :class="computedClass" 
        class="inline-flex items-center justify-center rounded-full hover:bg-primary-100 text-grey-800 bg-primary-50">
        {{ text }}
    </span>
</template>

<script>
    export default {
        name: 'expertBadge',
        props: ['text', 'size'],
        data() {
            return {
                smClass: 'font-semibold px-3 py-2 leading-4 text-[12px]',
                lgClass: 'font-bold leading-6 w-10 h-10',
            }
        },
        computed: {
            computedClass() {
                switch (this.size) {
                    case 'sm':
                        return this.smClass;
                
                    case 'lg':
                        return this.lgClass;
                }
            }
        }
    };
</script>