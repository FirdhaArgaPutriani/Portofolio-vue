<template>
    <section id="projects" class="relative w-11\12 px-16 mx-auto">
        <SectionHead title="My Projects" />
        <!-- Custom Nav Button -->
        <button
            class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
            <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
        </button>
        <button
            class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
            <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
        </button>

        <!-- Swiper Content -->
        <swiper :effect="'coverflow'" grab-cursor centered-slides :slides-per-view="'auto'"
            :converflowEffect="{ rotate: 50, stretch: 0, depth: 100, modifer: 1, slideShadow: true }"
            :Navigation="navOption" pagination :modules="[EffectCoverflow, Navigation]" class="max-w-full mt-32">
            <swiper-slide class="max-w-[300px]" v-for="(project, index) in projects" :key="index">
                <ProjectCard :title="project.title" :description="project.description"
                    :image="'src/assets/images/' + project.image" :tags="project.tags" :liveLinks="project.liveLinks"
                    :codeLink="project.codeLink" />
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import SectionHead from '../UI/SectionHead.vue';
import ProjectCard from '../UI/ProjectCard.vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ref } from 'vue';

// Define nav options
const navOption = {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',
}

const projects = ref([
    {
        title: 'Portofolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, excepturi.',
        image: '',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLinks: '/',
        codeLink: ""
    },
    {
        title: 'Portofolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, excepturi.',
        image: '',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLinks: '/',
        codeLink: ""
    },
])
</script>

<style>
.swiper-button-prev,
.swiper-button-next{
    cursor: pointer;
}
.swiper-slide{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>