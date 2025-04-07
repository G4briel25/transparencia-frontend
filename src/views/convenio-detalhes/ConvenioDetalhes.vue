<script setup>
import ConvenioPanel from "@/views/convenio-detalhes/ConvenioPanel.vue";
import convenioServiceImpl from "@/services/convenioService.js";
import {onMounted, defineProps, defineEmits} from "vue";
import ConvenioLancamentoAditivo from "@/views/convenio-detalhes/ConvenioLancamentoAditivo.vue";

const props = defineProps(['convenioId']);
const convenioService = convenioServiceImpl();
const emit = defineEmits(['start-loading', 'end-loading']);

onMounted( async () => {
    emit('start-loading');
    try {
        await convenioService.listarConvenioPorId(props.convenioId);
    } catch (error) {
        console.error("Erro ao detalhar o convênio na montagem:", error.message);
    } finally {
        emit('end-loading');
    }
});
</script>

<template>
    <div>
        <div class="flex items-center justify-center py-4">
            <p class="text-4xl font-medium">Detalhamento do Convênio</p>
        </div>
        <br>
        <ConvenioPanel :convenioService="convenioService.convenioDetalhado"></ConvenioPanel>
        <br><br>
        <ConvenioLancamentoAditivo :convenioService="convenioService.convenioDetalhado"></ConvenioLancamentoAditivo>
    </div>
</template>
