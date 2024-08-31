<template>
  <div>
    <p>
      {{route_value}}
    </p>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

definePageMeta({
  middleware
: 'auth'
})
// When accessing /posts/1, route.params.id will be 1
let route_value = route.params.value
console.log(route_value)

</script>

<style>

</style>