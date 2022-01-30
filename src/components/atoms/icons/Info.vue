<template>
    <svg v-if="size === 'sm'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="white"/>
        <path d="M8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 -3.13323e-07 8 -6.99382e-07C3.584 -1.08544e-06 1.08544e-06 3.584 6.99382e-07 8C3.13323e-07 12.416 3.584 16 8 16ZM7.2 4L8.8 4L8.8 5.6L7.2 5.6L7.2 4ZM7.2 7.2L8.8 7.2L8.8 12L7.2 12L7.2 7.2Z" :fill="color"/>
    </svg>
    <svg v-if="size === 'base'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="white"/>
        <path d="M12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 3.34471e-06 12 2.76562e-06C5.376 2.18654e-06 3.53551e-06 5.376 2.95642e-06 12C2.37733e-06 18.624 5.376 24 12 24ZM10.8 6L13.2 6L13.2 8.4L10.8 8.4L10.8 6ZM10.8 10.8L13.2 10.8L13.2 18L10.8 18L10.8 10.8Z" :fill="color"/>
    </svg>
</template>

<script>
    export default {
        name: 'Info',
        props: {
            size: String,
            color: {
                type: String,
                default: '#2A2425'
            }   
        }
    };
</script>