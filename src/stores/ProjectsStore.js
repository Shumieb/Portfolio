import { defineStore } from 'pinia'
import { ref, computed } from "vue";
import { MockProjects } from "../assets/MockData"

export const useProjectStore = defineStore('myProjects', () => {
    // state properties
    const projects = ref([...MockProjects]);

    // getters
    const getAllProjects = computed(() => projects.value);
    const getFeaturedProjects = computed(() => projects.value.filter(project => project.featured == true));
    const getRecentProjects = computed(() => projects.value.sort((a, b) => a.startDate - a.startDate).slice(0, 2));

    // actions


    return {
        projects,
        getAllProjects,
        getFeaturedProjects,
        getRecentProjects
    }
})