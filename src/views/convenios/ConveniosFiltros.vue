<script setup>
import {Icon} from "@iconify/vue";
import {InputText, Panel} from "primevue";
import {computed, ref, defineProps} from "vue";

const emit = defineEmits(['buscarConvenios', 'limparFiltros']);
const props = defineProps({
    buscaRealizada: {
        type: Boolean,
        default: false,
    }
});

const filtro = ref({
    proponente: null,
    objeto: null,
});

const buscar = () => {
    emit('buscarConvenios', filtro.value);
};

const limpar = () => {
    filtro.value = {
        proponente: null,
        objeto: null,
    };
    emit('limparFiltros');
};

const onEnter = (event) => {
    if (event.key === 'Enter') {
        buscar();
    }
};

const algumFiltroPreenchido = computed(() => {
    return Object.values(filtro.value).some(value => value !== null && value !== '');
});

const exibirBotaoLimpar = computed(() => {
    return props.buscaRealizada || algumFiltroPreenchido.value;
});
</script>

<template>
    <Panel header="Filtros" class="text-xl">
        <br>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            <div class="px-2">
                <div class="flex mb-2">
                    <Icon icon="lucide:building-2" width="24" height="24" class="mr-2"/>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Proponente</label>
                </div>
                <InputText class="w-full md:w-80 lg:w-full" v-model="filtro.proponente" @keydown="onEnter"/>
            </div>
            <div class="px-2 lg:col-span-2">
                <div class="flex mb-2">
                    <Icon icon="lucide:user" width="24" height="24" class="mr-2"/>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Objeto</label>
                </div>
                <InputText  class="w-full md:w-80 lg:w-10/12" v-model="filtro.objeto" @keydown="onEnter"/>
            </div>

            <div class="flex justify-end col-span-1 md:col-span-2 lg:col-span-3">
                <div class="flex justify-end">
                    <button
                        v-if="exibirBotaoLimpar" @click="limpar"
                        class="cursor-pointer h-10 mr-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                        <Icon icon="jam:rubber" width="24" height="24" class="mr-2"/>
                        Limpar
                    </button>
                    <button @click="buscar"
                            class="cursor-pointer h-10 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        <Icon icon="material-symbols:search" width="24" height="24" class="mr-2"/>
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    </Panel>
</template>