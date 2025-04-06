<script setup>
import convenioServiceImpl from "@/services/convenioService.js";
import {onMounted, ref} from "vue";
import {Message} from "primevue";
import ConveniosFiltros from "@/views/convenios/ConveniosFiltros.vue";
import ConveniosDataTable from "@/views/convenios/ConveniosDataTable.vue";

const convenioService = convenioServiceImpl();
const buscaRealizada = ref(false);

const buscar = async (filtro) => {
    const isFiltroVazio = Object.values(filtro).every(value => !value);
    buscaRealizada.value = true;

    if (isFiltroVazio) {
        await convenioService.listarConvenios();
    } else {
        await convenioService.buscarConvenios(filtro);
    }
};

const limpar = () => {
    convenioService.content = [];
    buscaRealizada.value = false;
};

onMounted( async () => {
    try {
        await convenioService.listarConvenios();
    } catch (error) {
        console.error('Erro ao listar convênios:', error);
    }
});

</script>

<template>
    <div>
        <div class="flex items-center justify-center py-4">
            <p class="text-4xl font-medium">Convênios</p>
        </div>
        <br>
        <ConveniosFiltros @buscarConvenios="buscar" @limparFiltros="limpar"></ConveniosFiltros>
        <br><br>
        <ConveniosDataTable :convenios="convenioService.content"></ConveniosDataTable>
        <Message v-if="buscaRealizada && convenioService.content.length === 0"
                 severity="warn"
                 class="py-2 flex justify-center">
            Nenhum registro encontrado!
        </Message>
        <br><br>
    </div>
</template>
