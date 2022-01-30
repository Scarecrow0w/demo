<template>
    <span 
        :class="currentPriceClass"
        class="text-4xl font-bold">
        {{ price.current }} ₽
        <strike v-if="type === 'sale' && price.previous" 
            :class="previousPriceClass"
            class="text-lg font-bold ">
            {{ price.previous }} ₽
        </strike>
    </span>
</template>

<script>
    export default {
        name: "Price",
        props: {
            price: Object,
            size: String,
            type: String
        },
        data() {
            return {
                baseClass: {
                    currentPriceClass: '',
                    previousPriceClass: 'text-grey-600'
                },
                smClass: {
                    currentPriceClass: '',
                    previousPriceClass: 'text-grey-500'
                }
            }
        },
        computed: {
            currentPriceClass() {
                let classlist = '';
                
                switch (this.type) {
                    case 'price':
                        classlist += 'text-grey-800 '
                        break;
                
                    case 'sale':
                        classlist += 'text-primary-500 ';
                        break;
                }

                switch (this.size) {
                    case 'base':
                        classlist += this.baseClass.currentPriceClass;
                        break;

                    case 'lg':
                        classlist += this.smClass.currentPriceClass;
                        break;
                }

                return classlist;
            },

            previousPriceClass() {
                switch (this.size) {
                    case 'base':
                        return this.baseClass.previousPriceClass;

                    case 'lg':
                        return this.smClass.previousPriceClass;
                }
            }
        }
    };
</script>