<script setup lang="ts">
// props
const props = defineProps(["project"])

</script>

<template>
    <router-link 
        to="/project/1" 
        class="text-2xl hover:underline decoration-slate-300"
        >{{ props.project.name }}</router-link>
    <div class="flex gap-3">
        <p class="capitalize text-slate-700">{{props.project.type}}</p>
        <p class="capitalize text-slate-700">|</p>
         <p class="capitalize text-slate-700">{{props.project.techStack}}</p>
    </div>
    <div class="py-4">
        <p class="text-lg">{{ props.project.summary }}</p>
    </div> 
</template>

<style scoped>

</style>