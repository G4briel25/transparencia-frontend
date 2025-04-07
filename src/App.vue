<script setup>
import Home from '@/views/Home.vue';
import FooterRodape from "@/components/FooterRodape.vue";
import HeaderTopo from "@/components/HeaderTopo.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <div class="flex flex-col justify-between h-screen">
        <div class="flex-grow">
            <header>
                <HeaderTopo></HeaderTopo>
                <div class="container mx-auto px-4">
                    <nav>
                        <NavBar></NavBar>
                    </nav>
                </div>
            </header>

            <main class="container mx-auto px-4">
                <Home></Home>
            </main>
        </div>

        <footer class="mt-5">
            <FooterRodape></FooterRodape>
        </footer>
    </div>
</template>
