<script setup>
import ConvenioPanel from "@/views/convenio-detalhes/ConvenioPanel.vue";
import convenioServiceImpl from "@/services/convenioService.js";
import {onMounted, defineProps} from "vue";
import ConvenioLancamentoAditivo from "@/views/convenio-detalhes/ConvenioLancamentoAditivo.vue";

const props = defineProps(['convenioId']);
const convenioService = convenioServiceImpl();

onMounted( async () => {
    await convenioService.listarConvenioPorId(props.convenioId);
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
