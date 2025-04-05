<script setup>
import Home from '@/views/Home.vue';
import FooterRodape from "@/components/FooterRodape.vue";
import HeaderTopo from "@/components/HeaderTopo.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <header>
        <HeaderTopo></HeaderTopo>
        <div class="container mx-auto px-4">
            <NavBar></NavBar>
        </div>
    </header>
    <main class="container mx-auto px-4">
        <Home></Home>
    </main>

    <footer>
        <FooterRodape></FooterRodape>
    </footer>
</template>