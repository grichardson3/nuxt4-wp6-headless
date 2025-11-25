<script setup lang="ts">

    import { onMounted, ref } from 'vue'
    import { useWPGeneralSettings } from '#wpnuxt'
    import type { GeneralSettingsFragment } from '#graphql-operations'

    const site = ref<GeneralSettingsFragment[]>([])
    onMounted(async () => {
        const { data } = await useWPGeneralSettings()
        site.value = data || []
    })

</script>

<template>
    <h1>{{ site.title }}</h1>
    <h2 v-if="site.description">{{ site.description }}</h2>
</template>