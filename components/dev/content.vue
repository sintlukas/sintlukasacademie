<template>
  <nav>
    <ul class="flex flex-col gap-1">
      <li v-for="item in flatLinks(navigation)" :key="item._path">
        <NuxtLink :to="item._path" class="text-sm hover:underline">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

function flatLinks(nodes, result = []) {
  if (!nodes) return result
  for (const node of nodes) {
    if (node._path) result.push(node)
    if (node.children) flatLinks(node.children, result)
  }
  return result
}
</script>
