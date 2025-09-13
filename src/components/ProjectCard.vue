<script setup lang="ts">
// props
const props = defineProps(["project"])

// variables
const skills = props.project.techStack
let skillsList:string[];

if(skills){
    skillsList = skills.split(",")
}

</script>

<template>
    <section class="grid grid-cols-3 gap-4">
        <section>
            <img 
                src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg" 
                alt="home picture"
                class="w-[100%] h-[300px] rounded-md mx-auto object-cover"
            >
        </section>
        <section class="col-span-2">
            <div>
                <router-link 
                    to="/project/1" 
                    class="text-2xl hover:underline decoration-slate-300"
                >{{ props.project.name }}</router-link>
                <p class="capitalize text-slate-700">{{props.project.type}} Project</p>
                <div class="flex mt-2.5">
                    <p 
                        v-for="skill in skillsList" 
                        :key="skill"
                        class="bg-pink-900 text-white rounded px-6 py-1 me-2"
                    >{{ skill }}</p>
                </div>
            </div>
            
           
            <div class="py-4">
                <p class="text-lg">{{ props.project.summary }}</p>
            </div> 
            
        </section>
    </section>
    
</template>

<style scoped>

</style>