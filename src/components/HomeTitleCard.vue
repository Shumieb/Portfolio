<script setup lang="ts">

</script>

<template>    
    <section class="grid grid-cols-2 gap-2 mt-8 mb-8 mx-auto w-[80%] content-center">
        <section class="py-2 ps-4 pe-6">
            <p class="text-2xl">Hi, I am Shumie</p>
            <p class="text-2xl">Software Developer</p>
            <p class="text-lg mt-3 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quia, exercitationem, impedit ut unde quam blanditiis 
                perferendis vitae nihil mollitia minima id laudantium quaerat itaque 
                non amet odit ipsum vero illum provident pariatur! Similique 
                recusandae id, cumque quam est iusto aut explicabo officiis 
                adipisci neque quo quae possimus quis praesentium tenetur!
            </p>
            
            <div class=" flex gap-4 justify-between">
                <router-link
                    to="/resume" 
                    role="button" 
                    class="bg-pink-900 text-white text-lg px-6 py-2 rounded shadow-sm hover:shadow-xl hover:bg-pink-950"
                >View Resume</router-link>
                <div class="pt-1.5">
                    <a 
                        role="button"
                        target="_blank"
                        href="https://www.linkedin.com"
                        class="text-sky-800 hover:text-sky-900">
                        <i class="pi pi-linkedin" style="font-size: 2rem; padding-right: 8px;"></i>
                    </a>
                    <a 
                        role="button"
                        target="_blank"
                        href="https://www.linkedin.com"
                        class="hover:text-slate-800"
                    >
                        <i class="pi pi-github" style="font-size: 2rem"></i>
                    </a>
                </div>
                
        </div>
        </section>
        <section>
            <img 
                src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg" 
                alt="home picture"
                class="w-80 h-80 rounded-full mx-auto"
            >
        </section>
    </section>    
</template>

<style scoped>

</style>