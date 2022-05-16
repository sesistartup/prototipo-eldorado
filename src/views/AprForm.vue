<template>
  <div class="w-full flex flex-col items-center justify-center">
    <InfosIniciais v-if="page === 0" />
    <DescricaoTarefa v-if="page === 1" />
    <EPIsEspecificos v-if="page === 2"/>
    <EPIsAplicaveis :epis-aplicaveis="episAplicaveis[0]" v-if="page === 3" />
    <EPIsAplicaveis :epis-aplicaveis="episAplicaveis[1]" v-if="page === 4" />
    <FerramentasDedicadas v-if="page === 5" />
    <ProcedimentosAplicaveis v-if="page === 6" />
    <EtapasAtividade v-if="page === 7" />
    <PerigoOuRisco v-if="page === 8" />
    <ConsequenciasDescricao v-if="page === 9" />
    <MedidasPreventivas v-if="page === 10" />
    <div class="w-5/6 mt-5 flex justify-between">
      <button @click="returnPage()">Anterior</button>
      <button @click="nextPage()">{{ nextBtnText }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, provide } from 'vue';
import InfosIniciais from '@/components/AprForm/InfosIniciais.vue'
import DescricaoTarefa from '@/components/AprForm/DescricaoTarefa.vue'
import EPIsEspecificos from '@/components/AprForm/EPIsEspecificos.vue'
import EPIsAplicaveis from '@/components/AprForm/EPIsAplicaveis.vue';
import FerramentasDedicadas from '@/components/AprForm/FerramentasDedicadas.vue';
import ProcedimentosAplicaveis from '@/components/AprForm/ProcedimentosAplicaveis.vue';
import EtapasAtividade from '@/components/AprForm/EtapasAtividade.vue';
import PerigoOuRisco from '@/components/AprForm/PerigoOuRisco.vue';
import ConsequenciasDescricao from '@/components/AprForm/ConsequenciasDescricao.vue';
import MedidasPreventivas from '@/components/AprForm/MedidasPreventivas.vue';

import { useRouter, useRoute } from 'vue-router';
const episAplicaveis = [
  [
    {
      id: 'check-capacete-jugular',
      name: 'Capacete com Jugular'
    },
    {
      id: 'check-ampla-visao',
      name: 'Óculos Ampla Visão'
    },
    {
      id: 'check-contra-impacto',
      name: 'Óculos Contra Impacto'
    },
    {
      id: 'check-auditivo-concha',
      name: 'Protetor Auditivo Concha'
    },
    {
      id: 'check-auditivo-plug',
      name: 'Protetor Auditivo Plug'
    },
    {
      id: 'check-mascara-fuga',
      name: 'Máscara de Fuga'
    },
    {
      id: 'check-luva-vaqueta',
      name: 'Luva de Vaqueta'
    },
    {
      id: 'check-cinto-seguranca',
      name: 'Cinto de Segurança'
    },
    {
      id: 'check-macacao-tyvcke',
      name: 'Macacão Tyvcke'
    },
    {
      id: 'check-touca-protecao',
      name: 'Touca de Protecão'
    },
    {
      id: 'check-respirador-poeira',
      name: 'Respirador p/Poeira em Suspensão'
    },
    {
      id: 'check-respirador-mecanico',
      name: 'Respirador Filtro Mecânico'
    },
    {
      id: 'check-capa-chuva',
      name: 'Capa de Chuva'
    }
  ],
  [
    {
      id: 'check-dispositivo-bloqueio',
      name: 'Dispositivos de Bloqueio'
    },
    {
      id: 'check-cone-sinalizacao',
      name: 'Cone de Sinalização'
    },
    {
      id: 'check-corrente-sinalizacao',
      name: 'Corrente de Sinalização'
    },
    {
      id: 'check-extintor',
      name: 'Extintor'
    },
    {
      id: 'check-linha-vida',
      name: 'Linha de Vida (cabo guia)'
    },
    {
      id: 'check-placa-sinalizacao',
      name: 'Placa de Sinalização'
    },
    {
      id: 'check-protecao-fisica',
      name: 'Proteção Física (cerca)'
    },
    {
      id: 'check-trava-queda',
      name: 'Trava Queda'
    },
    {
      id: 'check-biombo',
      name: 'Biombo'
    },
    {
      id: 'check-tapete-isolante',
      name: 'Tapete Isolante'
    },
    {
      id: 'check-bastao-salvamento',
      name: 'Bastão de Salvamento'
    }
  ]
]

const router = useRouter()

const page = ref(0)
const nextPage = () => {
  if (page.value === 10 ) router.push({ name: 'assinatura-apr'})
  page.value++
}
const returnPage = () => {
  if (page.value === 0) router.push({ name: 'home-view'})
  page.value--
}
const nextBtnText = computed(() => {
  if (page.value === 10) return 'Finalizar'
  else return 'Próximo'
})

const route = useRoute()
provide('visualizando', route.query.isVisualizing === 'true' ? true : false)
</script>