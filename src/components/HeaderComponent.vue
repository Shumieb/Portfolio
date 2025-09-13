<script setup lang="ts">

</script>

<template>
    <header class="mb-6 py-3 px-2">
      <div class="flex justify-between align-middle w-[80%] mx-auto">
        <RouterLink to="/" class="text-3xl font-semibold hover:underline decoration-pink-900">Tasks App</RouterLink>
        <nav>
          <RouterLink class="text-lg mx-3 hover:underline decoration-pink-900" to="/">Home</RouterLink>
          <RouterLink class="text-lg mx-3 hover:underline decoration-pink-900" to="/projects">Projects</RouterLink>
          <RouterLink class="text-lg mx-3 hover:underline decoration-pink-900" to="/resume">Resume</RouterLink>
        </nav>
      </div>      
    </header>    
</template>

<style scoped>

</style>