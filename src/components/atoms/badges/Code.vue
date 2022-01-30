<template>
    <span class="text-sm font-medium text-grey-500">
        Артикул: {{ code }}
    </span>
</template>

<script>
    export default {
        name: "codeBadge",
        props: ['code']
    };
</script>