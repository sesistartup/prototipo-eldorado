<template>
  <h3>Ferramentas Dedicadas</h3>
  <div class="flex flex-col justify-around h-[500px] w-5/6 bg-white drop-shadow-lg rounded-md px-4">
    <div id="check-container">
      <input type="checkbox" name="check-chaves-isoladas" id="check-chaves-isoladas">
      <label for="check-chaves-isoladas">Chaves Isoladas VDE</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-multimetro-cat-3" id="check-multimetro-cat-3">
      <label for="check-multimetro-cat-3">Multímetro CAT 3</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-detecter-tensao" id="check-detecter-tensao">
      <label for="check-detecter-tensao">Detector de Tensão</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-megohmetro" id="check-megohmetro">
      <label for="check-megohmetro">Megohmetro</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-microhmimetro" id="check-microhmimetro">
      <label for="check-microhmimetro">Microhmimetro</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-osciloscopio" id="check-osciloscopio">
      <label for="check-osciloscopio">Osciloscópio</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-analisador-energia" id="check-analisador-energia">
      <label for="check-analisador-energia">Analisador de Energia</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-fasimetro" id="check-fasimetro">
      <label for="check-fasimetro">Fasímetro</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-hi-pot" id="check-hi-pot">
      <label for="check-hi-pot">HI POT</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-alicate-amperimetro" id="check-alicate-amperimetro">
      <label for="check-alicate-amperimetro">Alicate Amperímetro</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-ttr" id="check-ttr">
      <label for="check-ttr">TTR</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup } from '@/utils/checkboxGroupStyle'
styleCheckboxGroup()
</script>