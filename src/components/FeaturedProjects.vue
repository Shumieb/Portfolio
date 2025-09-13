<script setup lang="ts">
    import { ref } from "vue";
    import type { ProjectType } from "../EntityTypes";
    import { useProjectStore } from "../stores/ProjectsStore";
    import ProjectCard from "./ProjectCard.vue";

    // values from store
    const store = useProjectStore()
    const { getFeaturedProjects } = store

    // variables
    const feturedProjects = ref<ProjectType[]>(getFeaturedProjects);
</script>

<template>
    <section class="py-4 mt-2">
        <div class="w-[80%] mx-auto">
            <div class="flex justify-between mb-4">
                <p class="text-2xl">Featured projects</p>
            </div>            
            <ul class="py-3">
                <li 
                    class="bg-white rounded-md px-6 py-3" 
                    v-for="project in feturedProjects" :key="project.id"
                >
                    <ProjectCard :project="project"/>
                    <div class="border-b-2 border-slate-200 mt-4"></div>
                </li>
            </ul>
        </div>   
    </section>
    
</template>

<style scoped>

</style>