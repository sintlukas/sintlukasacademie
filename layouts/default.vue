<template>
  <div class="relative overflow-clip w-full">
    <main-header class="z-40"/>

    <div>
      <div class="mt-0 pb-0">
        <slot />
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script setup>
// Padding hack, use the route, check if the route is not "aanbod"
const route = useRoute()


</script>