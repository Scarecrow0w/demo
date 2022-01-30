<template>
    <span :class="computedClass" 
        class="inline-flex items-center justify-center px-2 py-1 font-bold text-white rounded bg-primary-600">
        {{ text }}
    </span>
</template>

<script>
    export default {
        name: 'saleBadge',
        props: ['text', 'size'],
        data() {
            return {
                baseClass: '',
                lgClass: 'text-2xl',
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