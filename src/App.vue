<script setup>
import HeaderTopo from "@/components/HeaderTopo.vue";
import NavBar from "@/components/NavBar.vue";
import FooterRodape from "@/components/FooterRodape.vue";
import LoadingModal from "@/components/LoadingModal.vue";
import { ref } from 'vue';

const isLoading = ref(false);

const startLoading = () => {
    isLoading.value = true;
};

const endLoading = () => {
    isLoading.value = false;
};
</script>

<template>
    <LoadingModal :isVisible="isLoading"/>

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
                <router-view
                    @start-loading="startLoading"
                    @end-loading="endLoading"
                ></router-view>
            </main>
        </div>

        <footer class="mt-5">
            <FooterRodape></FooterRodape>
        </footer>
    </div>
</template>
