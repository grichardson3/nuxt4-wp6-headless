<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { PostFragment } from '#graphql-operations'
import { useWPPosts } from '#wpnuxt'

const posts = ref<PostFragment[]>([])
onMounted(async () => {
  const { data } = await useWPPosts()
  posts.value = data || []
})
</script>

<template>
  <div
    id="posts"
    title="Blog posts"
  >
    <div v-if="posts && posts.length > 0">
      <div
        v-for="post, index in posts"
        :key="index"
        :title="post.title"
        :description="post.date?.split('T')[0]"
        :to="post.uri"
      >
        <h1>{{ post.title }}</h1>
        <small>{{ post.date }}</small>
        <img
          v-if="post?.featuredImage?.node?.sourceUrl"
          :src="post.featuredImage.node.sourceUrl"
          class="w-full rounded-md"
        >
        <span v-sanitize="post.excerpt" />
    </div>
    </div>
    <div v-else>
      <PostPlaceholder
        v-for="i in 3"
        :key="i"
      />
    </div>
  </div>
</template>