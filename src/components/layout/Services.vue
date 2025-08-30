<template>
    <section id="services" class="relative text-white mt-32">
        <SectionHead />
        <div class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <article class="px-[12px] mb-[24px]" v-for="element in services" :key="element.id">
                <div class="mt-[]"></div>
            </article>
        </div>
    </section>
</template>
<script setup>
import SectionHead from '../UI/SectionHead.vue';
import { ref } from 'vue';

const services = ref ([
    {
        id: 1,
        icon: 'https://img.icons8.com/ios-filled/100/deadla/google-code.png',
        name: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam ducimus recusandae? Aut fugit similique, id facilis possimus at impedit.'
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/deadla/external-Technical-Writing-mobile-app-development-vectorslab-gryph-vectorslab.png',
        name: 'Technical Writing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam ducimus recusandae? Aut fugit similique, id facilis possimus at impedit.'
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/external-solid-design-circle/100/deadla/external-Mobile-digital-marketing-solid-design-circle.png',
        name: 'Technical Writing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam ducimus recusandae? Aut fugit similique, id facilis possimus at impedit.'
    },
    {
        id: 4,
        icon: 'https://img.icons8.com/ios-filled/100/deadla/email-open.png',
        name: 'Technical Writing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam ducimus recusandae? Aut fugit similique, id facilis possimus at impedit.'
    },
    {
        id: 5,
        icon: 'https://img.icons8.com/ios-filled/100/deadla/windows10-personalization.png',
        name: 'Technical Writing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam ducimus recusandae? Aut fugit similique, id facilis possimus at impedit.'
    },
    {
        id: 6,
        icon: 'https://img.icons8.com/ios-filled/100/deadla/web-design.png',
        name: 'Technical Writing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam ducimus recusandae? Aut fugit similique, id facilis possimus at impedit.'
    },
])
</script>