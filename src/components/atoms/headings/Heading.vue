<template>
    <component 
        :is="tag" 
        :class="computedClass">
        {{ title }}
    </component>
</template>

<script>
    export default {
        name: "Heading",
        props: ["tag", "title", "size"],
        data() {
            return {
                fiveXlClass: 'text-grey-800 font-bold text-4xl leading-10 tracking-[0.37px]',
                fourXlClass: 'text-grey-800 font-bold text-3xl leading-9 tracking-[0.2px]',
                threeXlClass: 'text-grey-800 font-bold text-2xl leading-7 tracking-[-0.4px]',
                twoXlClass: 'text-grey-800 font-bold text-xl leading-7 tracking-[-0.1px]',
                lgClass: 'text-grey-800 font-bold text-lg leading-6',
                baseClass: 'text-grey-800 font-bold leading-6 tracking-[-0.37px]',
                smClass: 'text-grey-500 font-medium leading-6 tracking-[-0.37px]',
            }
        },
        computed: {
            computedClass() {
                switch (this.size) {
                    case '5xl':
                        return this.fiveXlClass;
                        
                    case '4xl':
                        return this.fourXlClass;

                    case '3xl':
                        return this.threeXlClass;

                    case '2xl':
                        return this.twoXlClass;

                    case 'lg':
                        return this.lgClass;

                    case 'base':
                        return this.baseClass;

                    case 'sm':
                        return this.smClass;

                }
            }
        }

    };
</script>