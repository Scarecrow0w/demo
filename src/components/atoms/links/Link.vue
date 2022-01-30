<template>
    <a :href="link.url"
        :class="computedClass"
        class="text-blue-400 border-b border-blue-50 whitespace-nowrap hover:text-blue-600">
        {{ link.name }}
    </a>
</template>

<script>
    export default {
        name: "Link",
        props: {
            link: Object,
            size: String
        },
        data() {
            return {
                baseClass: 'text-base-link',
                smClass: 'text-sm'
            }
        },
        computed: {
            computedClass() {
                switch (this.size) {
                    case 'base':
                        return this.baseClass;

                    case 'sm':
                        return this.smClass;
                }
            }
        }
    };
</script>