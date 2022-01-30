<template>
    <h5 v-if="size === 'sm'"
        class="mb-4 font-medium text-grey-500">
        О товаре
    </h5>
    <p :class="this.size === 'xs' ? 'text-sm' : ''"
        class="font-medium text-grey-800">
        {{ text }}
    </p>
</template>

<script>
    export default {
        name: "Description",
        props: ['size', 'text']
    }
</script>
