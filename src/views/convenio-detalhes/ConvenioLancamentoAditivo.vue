<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import {DataTable, Column, Button, Dialog, Message} from "primevue";
import {defineProps, ref} from "vue";
import {Icon} from "@iconify/vue";
import funcoes from "@/utils/funcoes.js";

const { formatarDataBr, formatarMoedaBr } = funcoes();
const props = defineProps(['convenioService']);

const modalLancamento = ref(false);
const lancamentosDoAditivo = ref([]);

const visualizarLancamento = (aditivo) => {
    lancamentosDoAditivo.value = aditivo.lancamento;
    modalLancamento.value = true;
};
</script>

<template>
    <Tabs value="0">
        <TabList>
            <Tab value="0">Lançamentos</Tab>
            <Tab value="1">Aditivos</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <DataTable :value="props.convenioService.lancamento">
                    <Column field="id" header="ID"></Column>
                    <Column field="exercicio" header="Exercício"></Column>
                    <Column field="dataRepasse" header="Data Repasse">
                        <template #body="slotProps">
                            {{ formatarDataBr(slotProps.data.dataRepasse) }}
                        </template>
                    </Column>
                    <Column field="valorPago" header="Valor Pago">
                        <template #body="slotProps">
                            {{ formatarMoedaBr(slotProps.data.valorPago) }}
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
            <TabPanel value="1">
                <DataTable :value="props.convenioService.aditivos">
                    <Column field="id" header="ID"></Column>
                    <Column field="numeroAditivo" header="Aditivo"></Column>
                    <Column field="responsaveis" header="Responsáveis"></Column>
                    <Column field="dataInicio" header="Data Início">
                        <template #body="slotProps">
                            {{ formatarDataBr(slotProps.data.dataInicio) }}
                        </template>
                    </Column>
                    <Column field="dataFim" header="Data Fim">
                        <template #body="slotProps">
                            {{ formatarDataBr(slotProps.data.dataInicio) }}
                        </template>
                    </Column>
                    <Column field="valorTotalAditivo" header="Valor Total Aditivo">
                        <template #body="slotProps">
                            {{ formatarMoedaBr(slotProps.data.valorTotalAditivo) }}
                        </template>
                    </Column>
                    <Column field="situacaoDescricaoAditivo" header="Situação"></Column>
                    <Column header="Lançamentos" style="width: 8rem">
                        <template #body="slotProps">
                            <div class="flex ml-7">
                                <button
                                    title="Visualizar"
                                    @click="visualizarLancamento(slotProps.data)"
                                    class="cursor-pointer bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700"
                                >
                                    <Icon icon="fluent:eye-12-regular" width="24" height="24"/>
                                </button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
        </TabPanels>
    </Tabs>

    <Dialog v-model:visible="modalLancamento" header="Lançamentos do Aditivo" :style="{ width: '75vw' }" maximizable modal>
        <DataTable v-if="lancamentosDoAditivo.length" :value="lancamentosDoAditivo">
            <Column field="id" header="ID"></Column>
            <Column field="exercicio" header="Exercício"></Column>
            <Column field="dataRepasse" header="Data Repasse">
                <template #body="slotProps">
                    {{ formatarDataBr(slotProps.data.dataRepasse) }}
                </template>
            </Column>
            <Column field="valorPago" header="Valor Pago">
                <template #body="slotProps">
                    {{ formatarMoedaBr(slotProps.data.valorPago) }}
                </template>
            </Column>
        </DataTable>

        <Message v-else severity="warn" class="my-1">
            Nenhum registro encontrado!
        </Message>

        <template #footer>
            <Button severity="info" label="Ok" icon="pi pi-check" @click="modalLancamento = false" />
        </template>
    </Dialog>
</template>