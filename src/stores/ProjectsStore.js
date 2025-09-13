import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useProjectStore = defineStore('myProjects', () => {
    // state properties
    const projects = ref([]);

    // getters
    const getAllProjects = computed(() => projects.value);
    const getFeaturedProjects = computed(() => projects.value.filter(project => project.featured == true));

    // actions


    return {
        projects,
        getAllProjects,
        getFeaturedProjects
    }
})