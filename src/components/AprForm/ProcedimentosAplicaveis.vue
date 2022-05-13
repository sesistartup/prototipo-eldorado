<template>
  <h3>Procedimentos Aplicáveis</h3>
  <div class="flex flex-col justify-around h-[500px] w-5/6 bg-white drop-shadow-lg rounded-md px-4">
    <div id="check-container">
      <input type="checkbox" name="check-sep-eletrica" id="check-sep-eletrica">
      <label for="check-sep-eletrica">SEP - Elétrica</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr10-eletrica" id="check-nr10-eletrica">
      <label for="check-nr10-eletrica">NR 10 - Elétrica</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr11-pta" id="check-nr11-pta">
      <label for="check-nr11-pta">NR 11 - PTA</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr11-empilhadeira" id="check-nr11-empilhadeira">
      <label for="check-nr11-empilhadeira">NR 11 - Empilhadeira</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr33-espaco-confinado" id="check-nr33-espaco-confinado">
      <label for="check-nr33-espaco-confinado">NR 33 - Espaço Confinado</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr35-trabalho-altura" id="check-nr35-trabalho-altura">
      <label for="check-nr35-trabalho-altura">NR 35 - Trabalho Altura</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup } from '@/utils/checkboxGroupStyle'
import { getAprState } from '@/utils/getAprState'
styleCheckboxGroup(getAprState())
</script>