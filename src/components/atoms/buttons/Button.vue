<template>
    <button v-if="type === 'primary'"
        :class="computedClass"
        class="w-full min-w-[64px] disabled:bg-grey-200 disabled:text-grey-600 flex hover:bg-primary-900 justify-center items-center rounded-lg bg-primary-400 text-white px-4">
        {{ text }}
    </button>
    <button v-else-if="type === 'outline'"
        :class="computedClass"
        class="w-full border border-grey-400 hover:border-grey-600 disabled:border-0 min-w-[64px] disabled:bg-grey-200 disabled:text-grey-600 flex justify-center items-center rounded-lg bg-white text-grey-800 px-4">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: ['text', 'type', 'size'],
        data() {
            return {
                smClass: 'text-sm-bold py-[6px]',
                baseClass: 'text-base-bold py-3',
            }
        },
        computed: {
            computedClass() {
                switch (this.size) {
                    case 'sm':
                        return this.smClass;
                
                    case 'base':
                        return this.baseClass;
                }
            }
        }
    };
</script>