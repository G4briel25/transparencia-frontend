import { defineStore } from "pinia";
import api from '@/utils/api';

const convenioServiceImpl = defineStore('ConvenioServiceImpl', {
    state: () => ({
        content: [],
        convenioDetalhado: [],
    }),

    actions: {
        async listarConvenios() {
            try {
                const response = await api.get('/api/convenios/listar');
                this.content = response.data;
            } catch (error) {
                console.error('Erro ao listar convênios:', error);
                this.content = [];
            }
        },

        async buscarConvenios(filtro) {
            try {
                const response = await api.post('/api/convenios/filtrar', filtro);
                this.content = response.data;
            } catch (error) {
                console.error('Erro ao buscar convênios:', error);
                this.content = [];
            }
        },

        async buscarPorId(_convenioId) {
            try {
                const response = await api.get(`/api/convenios/${_convenioId}`)
                this.cadastro.objeto = response.data;
            } catch (error) {
                console.log('Erro ao buscar convênio por id:', error);
            }
        },

        async listarConvenioPorId(_convenioId) {
            try {
                const response = await api.get(`/api/convenios/${_convenioId}/detalhado`);
                this.convenioDetalhado = response.data;
            } catch (error) {
                console.log('Erro ao listar convênio por id:', error);
            }
        }
    }
});

export default convenioServiceImpl;