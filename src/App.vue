<template>
  <div>
    <h1>My Blog</h1>
    <div class="debug-style">test</div>

    <ul>
      <li v-for="file in files" :key="file">
        <a href="#" @click.prevent="load(file)">{{ file }}</a>
      </li>
    </ul>
    <div class="prose dark:prose-invert">
      <h2>testing my h2</h2>
      <div v-html="content"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {marked} from 'marked'
import './assets/styles/tailwind.css'


marked.setOptions({
  breaks: true,
})

const files = ref(['hello.md', 'about.md'])
const content = ref('')


const load = async (file: string) => {
  const response = await fetch(`${import.meta.env.BASE_URL}articles/${file}`)
  const text = await response.text()
  content.value = await marked.parse(text)
}

load(files.value[0])

</script>

