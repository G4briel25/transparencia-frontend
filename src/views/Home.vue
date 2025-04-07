<script setup>

</script>

<template>
    <router-view @start-loading="$emit('start-loading')" @end-loading="$emit('end-loading')"></router-view>
</template>

<style scoped>

</style>