<script setup>
import convenioServiceImpl from "@/services/convenioService.js";
import { onMounted, ref, defineEmits } from "vue";
import { Message } from "primevue";
import ConveniosFiltros from "@/views/convenios/ConveniosFiltros.vue";
import ConveniosDataTable from "@/views/convenios/ConveniosDataTable.vue";

const emit = defineEmits(['start-loading', 'end-loading']);
const convenioService = convenioServiceImpl();
const buscaRealizada = ref(false);
const dadosEncontrados = ref(false);

const buscar = async (filtro) => {
    emit('start-loading');
    try {
        const isFiltroVazio = Object.values(filtro).every(value => !value);
        if (isFiltroVazio) {
            await convenioService.listarConvenios();
        } else {
            await convenioService.buscarConvenios(filtro);
        }
        dadosEncontrados.value = convenioService.content.length > 0;
    } catch (error) {
        console.error("Erro ao buscar convênios:", error);
    } finally {
        emit('end-loading');
    }
};

const limpar = () => {
    convenioService.content = [];
    buscaRealizada.value = false;
    dadosEncontrados.value = false;
};

onMounted(async () => {
    emit('start-loading');
    try {
        await convenioService.listarConvenios();
        buscaRealizada.value = convenioService.content.length > 0;
    } catch (error) {
        console.error("Erro ao listar convênios na montagem:", error.message);
    } finally {
        emit('end-loading');
    }
});

</script>

<template>
    <div>
        <div class="flex items-center justify-center py-4">
            <p class="text-4xl font-medium">Convênios</p>
        </div>
        <br>
        <ConveniosFiltros
            @buscarConvenios="buscar"
            @limparFiltros="limpar"
            :buscaRealizada="buscaRealizada"></ConveniosFiltros>
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