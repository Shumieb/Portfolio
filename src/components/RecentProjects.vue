<script setup lang="ts">
    import { useProjectStore } from '../stores/ProjectsStore';
    import { ref } from "vue";
    import BasicProjectCard from './BasicProjectCard.vue';
    import type { ProjectType } from '../EntityTypes';

    // values from store
    const store = useProjectStore()
    const { getRecentProjects } = store

    // variables
    const recentProjects = ref<ProjectType[]>(getRecentProjects);

</script>

<template>
    <section class="bg-pink-100 py-4">
        <div class="w-[80%] mx-auto">
            <div class="flex justify-between mb-4">
                <p class="text-2xl">Recent projects</p>
                <router-link 
                    class="text-2xl underline decoration-pink-900 hover:decoration-slate-400" 
                    to="/projects"
                >View Projects</router-link>
            </div>            
            <ul class="grid grid-cols-2 gap-4 py-3">
                <li 
                    class="bg-white rounded-md px-6 py-3" 
                    v-for="project in recentProjects" :key="project.id"
                >
                    <BasicProjectCard :project="project"/>
                </li>
            </ul>
        </div>   
    </section>
    
</template>