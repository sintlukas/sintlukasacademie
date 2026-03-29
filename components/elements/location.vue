<template>
  <div class="bg-white self-stretch">
    <div class="relative" :class="[fillheight ? 'h-full' : 'h-40']">
      <iframe
        :src="osmSrc"
        style="width: 100%; height: 100%; border: 0; opacity: 0.5;"
        loading="lazy"
      />
    </div>
    <div class="pb-5 pt-2 px-2 bg-third-50" v-if="showAddress">
      <div class="font-bold text-sm">{{ data.name }}</div>
      <div class="text-xs">
        <div>{{ data.street }}</div>
        <div>{{ data.zip }} {{ data.city }}</div>
      </div>
      <div>
        <a class="opacity-50 text-xs" target="_blank" :href="`https://maps.google.com/?ll=${lat},${lng}`">
          Bekijk in Google Maps
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  location: {
    type: String,
    required: true
  },
  showAddress: {
    type: Boolean,
    default: false
  },
  fillheight: {
    type: Boolean,
    default: false
  }
});

const { data } = await useAsyncData(`location-${props.location}`, () => queryContent(props.location).findOne())

const coordinates = computed(() => JSON.parse(data.value.location).coordinates)
const lng = computed(() => coordinates.value[0])
const lat = computed(() => coordinates.value[1])

const delta = 0.004
const osmSrc = computed(() => {
  const bbox = `${lng.value - delta},${lat.value - delta},${lng.value + delta},${lat.value + delta}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat.value},${lng.value}`
})
</script>