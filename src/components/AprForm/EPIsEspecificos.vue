<template>
  <h3>EPI's Específicos</h3>
  <div class="flex flex-col justify-around h-[500px] w-5/6 bg-white drop-shadow-lg rounded-md px-4">
    <div id="check-container">
      <input type="checkbox" name="check-botina" id="check-botina">
      <label for="check-botina">Botina Segurança Eletricista</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-luva-isolante-0" id="check-luva-isolante-0">
      <label for="check-luva-isolante-0">Luva Isolante Classe 0</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-luva-isolante-2" id="check-luva-isolante-2">
      <label for="check-luva-isolante-2">Luva Isolante Classe 2</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-luva-isolante-4" id="check-luva-isolante-4">
      <label for="check-luva-isolante-4">Luva Isolante Classe 4</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-capuz-carrasco" id="check-capuz-carrasco">
      <label for="check-capuz-carrasco">Capuz Carrasco Categoria 4</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-camisa-calca-fr" id="check-camisa-calca-fr">
      <label for="check-camisa-calca-fr">Camisa e Calça FR Risco 2</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-balaclava-2" id="check-balaclava-2">
      <label for="check-balaclava-2">Balaclava FR Risco 2</label>
    </div>
      <div id="check-container">
        <input type="checkbox" name="check-capacete-risco-2" id="check-capacete-risco-2">
        <label for="check-capacete-risco-2">Capacete Com Protetor Facial Risco 2</label>
      </div>
    <div id="check-container">
      <input type="checkbox" name="check-roupa-chama-2" id="check-roupa-chama-2">
      <label for="check-roupa-chama-2">Roupa Anti Chama Risco 2</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup } from '@/utils/checkboxGroupStyle'
styleCheckboxGroup()
</script>