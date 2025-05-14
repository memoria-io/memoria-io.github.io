<template>
  <div>
    <h1>My Blog</h1>
    <ul>
      <li v-for="file in files" :key="file">
        <a href="#" @click.prevent="load(file)">{{ file }}</a>
      </li>
    </ul>
    <div v-html="content" class="markdown-body"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'

const files = ref(['hello.md', 'about.md'])
const content = ref('')

const load = async (file: string) => {
  const res = await fetch(`./articles/${file}`)
  const text = await res.text()
  content.value = marked.parse(text)
}

load(files.value[0])
</script>

<style>
.markdown-body {
  max-width: 700px;
  margin: 2rem auto;
  font-family: sans-serif;
  line-height: 1.6;
}
</style>
