<template>
  <div class="w-72 flex flex-col items-center justify-center">
    <FormLabel
      :title="formTitleIndexes[page]"
      class="mt-14 mb-4"
      v-if="page !== 12"
    />
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
    <ObservacaoApr v-if="page === 11" />
    <AssinaturaUsuariosApr v-if="page === 12" />
    <div class="w-full mt-5 flex justify-between">
      <button @click="returnPage()" class="std-button border-[#9DB3A4] bg-[#9DB3A4] text-white drop-shadow-xl w-full mr-2">Anterior</button>
      <button @click="nextPage()" class="std-button border-[#385C48] bg-[#385C48] text-white drop-shadow-xl w-full ml-2">{{ nextBtnText }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, provide, reactive } from 'vue';
import FormLabel from '@/components/FormLabel.vue'
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
import ObservacaoApr from '../components/AprForm/ObservacaoApr.vue';
import AssinaturaUsuariosApr from '@/components/Assinaturas/AssinaturaUsuariosApr.vue';
const episAplicaveis = [
  [
    {
      id: 'check-capacete-jugular',
      name: 'Capacete com Jugular',
      isChecked: false
    },
    {
      id: 'check-ampla-visao',
      name: 'Óculos Ampla Visão',
      isChecked: false
    },
    {
      id: 'check-contra-impacto',
      name: 'Óculos Contra Impacto',
      isChecked: false
    },
    {
      id: 'check-auditivo-concha',
      name: 'Protetor Auditivo Concha',
      isChecked: false
    },
    {
      id: 'check-auditivo-plug',
      name: 'Protetor Auditivo Plug',
      isChecked: false
    },
    {
      id: 'check-mascara-fuga',
      name: 'Máscara de Fuga',
      isChecked: false
    },
    {
      id: 'check-luva-vaqueta',
      name: 'Luva de Vaqueta',
      isChecked: false
    },
    {
      id: 'check-cinto-seguranca',
      name: 'Cinto de Segurança',
      isChecked: false
    },
    {
      id: 'check-macacao-tyvcke',
      name: 'Macacão Tyvcke',
      isChecked: false
    },
    {
      id: 'check-touca-protecao',
      name: 'Touca de Protecão',
      isChecked: false
    },
    {
      id: 'check-respirador-poeira',
      name: 'Respirador p/Poeira em Suspensão',
      isChecked: false
    },
    {
      id: 'check-respirador-mecanico',
      name: 'Respirador Filtro Mecânico',
      isChecked: false
    },
    {
      id: 'check-capa-chuva',
      name: 'Capa de Chuva'
    }
  ],
  [
    {
      id: 'check-dispositivo-bloqueio',
      name: 'Dispositivos de Bloqueio',
      isChecked: false
    },
    {
      id: 'check-cone-sinalizacao',
      name: 'Cone de Sinalização',
      isChecked: false
    },
    {
      id: 'check-corrente-sinalizacao',
      name: 'Corrente de Sinalização',
      isChecked: false
    },
    {
      id: 'check-extintor',
      name: 'Extintor',
      isChecked: false
    },
    {
      id: 'check-linha-vida',
      name: 'Linha de Vida (cabo guia)',
      isChecked: false
    },
    {
      id: 'check-placa-sinalizacao',
      name: 'Placa de Sinalização',
      isChecked: false
    },
    {
      id: 'check-protecao-fisica',
      name: 'Proteção Física (cerca)',
      isChecked: false
    },
    {
      id: 'check-trava-queda',
      name: 'Trava Queda',
      isChecked: false
    },
    {
      id: 'check-biombo',
      name: 'Biombo',
      isChecked: false
    },
    {
      id: 'check-tapete-isolante',
      name: 'Tapete Isolante',
      isChecked: false
    },
    {
      id: 'check-bastao-salvamento',
      name: 'Bastão de Salvamento',
      isChecked: false
    }
  ]
]

const formTitleIndexes = reactive([
  'APR',
  'DESCRIÇÃO DA TAREFA',
  `EPI's ESPECÍFICOS`,
  `EPI'S APLICÁVEIS`,
  `EPI'S APLICÁVEIS`,
  'FERRAMENTAS DEDICADAS',
  'PROCEDIMENTOS APLICÁVEIS',
  'ETAPAS DA ATIVIDADE',
  'PERIGO OU RISCO',
  'CONSEQUÊNCIAS',
  'MEDIDAS PREVENTIVAS',
  'OBSERVAÇÃO'
])

const router = useRouter()

const page = ref(0)
const nextPage = () => {
  if (page.value === 12 ) router.push({ name: 'assinatura-apr'})
  page.value++
}
const returnPage = () => {
  if (page.value === 0) router.push({ name: 'home-view'})
  page.value--
}
const nextBtnText = computed(() => {
  if (page.value === 12) return 'Criar'
  else return 'Próximo'
})

const route = useRoute()
provide('visualizando', route.query.isVisualizing === 'true' ? true : false)
</script>