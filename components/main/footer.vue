<template>
  <footer class="bg-primary-200 border-b-4 border-accent-800 w-full relative">
    <!-- Top section -->
    <div class="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-8 lg:py-12">
      <div class="flex flex-col w-full gap-2">
        <elements-newsletter/>
        <elements-markdown v-if="data.markdown" :markdownString="data.markdown" />
        <div class="flex relative -left-1">
          <svg-fb class="h-8 w-auto" />
          <svg-instagram class="h-8 w-auto p-1"/>
        </div>
      </div>
    </div>

    <!-- Bottom section -->
    <div class="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-end lg:justify-between lg:gap-x-3">
      <div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
        <p class="text-gray-500 dark:text-gray-400 text-sm prose">
          <span>© {{ new Date().getFullYear() }}</span>
        </p>
      </div>
      <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3 mt-3 lg:mt-0">
        <svg-logosl class="h-12 w-auto" />
      </div>
    </div>
  </footer>
</template>

<script setup>
const { data } = await useAsyncData('footer', () => queryContent('site/footer').findOne())
let navItems = []
if(data.value.links) navItems = data.value.links.map(n => ({ 'label': n.label, to: `/pages/nl/${n.page}`}))
</script>
