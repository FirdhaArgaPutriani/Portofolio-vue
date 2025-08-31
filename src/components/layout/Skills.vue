<template>
    <section class="mt-32" id="skills">
        <SectionHead title="My Skills" />
        <div class="mt-20 flex justify-center">
            <ul class="flex flex-wrap justify-center items-center">
                <li ref="skillRefs" v-for="(element, index) in skills" :key="index"
                    :class="`mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t ${element.bgGradient}`">
                    <div class="rounded-[12px] bg-primary mt-[3px] p-12 md:p-5 text-center">
                        <h3 class="font-bold text-[35px] text-white flex items-center justify-center">
                            <Countup v-if="visibleItems[index]" :endVal="element.percentage" :startVal="0" :duration="2"/> %
                        </h3>
                        <p class="font-normal text-[16px]" :style="{color:element.textColor}">{{ element.title }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>
import SectionHead from '../UI/SectionHead.vue';
import { ref,onMounted } from 'vue';

const skills = ref([
    {
        percentage: 98,
        title: 'Figma',
        bgGradient: 'to-[#FA2855] from-[#1F1E1C99]',
        textColor: '#FA2855'
    },
    {
        percentage: 96,
        title: 'Java',
        bgGradient: 'to-[#DE8CE6] from-[#1F1E1C99]',
        textColor: '#DE8CE6'
    },
    {
        percentage: 72,
        title: 'Vue js',
        bgGradient: 'to-[#FF9A0099] from-[#1F1E1C99]',
        textColor: '#FF9A00'
    },
    {
        percentage: 43,
        title: 'Wordpress',
        bgGradient: 'to-[#00A9FF99] from-[#1F1E1C99]',
        textColor: '#00A9FF'
    },
    {
        percentage: 40,
        title: 'React js',
        bgGradient: 'to-[#9E00FF99] from-[#1F1E1C99]',
        textColor: '#AD00FF'
    },
    {
        percentage: 98,
        title: 'HTML',
        bgGradient: 'to-[#ACAC39] from-[#1F1E1C99]',
        textColor: '#ACAC39'
    },
    {
        percentage: 92,
        title: 'Javascript',
        bgGradient: 'to-[#59C37899] from-[#1F1E1C99]',
        textColor: '#59C378'
    }
])

// Track visibility of items
const visibleItems = ref(skills.value.map(()=> false));
const skillRefs = ref([]);

// IntersectionObserver logic
onMounted(()=>{
    const observer = new IntersectionObserver(
        (entries)=> {
            entries.forEach((entry)=> {
                if(entry.isIntersecting) {
                    const index = skillRefs.value.indexOf(entry.target);
                    if(index !== -1) {
                        visibleItems.value[index] = true; //Mark item as visible
                    }
                }
            })
        },
        {threshold: 0.3} // Trigger when 30% of element is visible
    );

    // Observe all skills elements
    skillRefs.value.forEach((el)=> observer.observe(el));
})
</script>
<style></style>