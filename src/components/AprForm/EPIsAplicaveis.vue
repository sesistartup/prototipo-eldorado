<template>
  <h3>EPI's Aplicáveis</h3>
  <div class="flex flex-col justify-around h-[500px] w-5/6 bg-white drop-shadow-lg rounded-md px-4">
    <div id="check-container">
      <input type="checkbox" name="check-capacete-jugular" id="check-capacete-jugular">
      <label for="check-capacete-jugular">Capacete com Jugular</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-ampla-visao" id="check-ampla-visao">
      <label for="check-ampla-visao">Óculos Ampla Visão</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-contra-impacto" id="check-contra-impacto">
      <label for="check-contra-impacto">Óculos Contra Impacto</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-auditivo-concha" id="check-auditivo-concha">
      <label for="check-auditivo-concha">Protetor Auditivo Concha</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-auditivo-plug" id="check-auditivo-plug">
      <label for="check-auditivo-plug">Protetor Auditivo Plug</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-mascara-fuga" id="check-mascara-fuga">
      <label for="check-mascara-fuga">Máscara de Fuga</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-luva-vaqueta" id="check-luva-vaqueta">
      <label for="check-luva-vaqueta">Luva de Vaqueta</label>
    </div>
      <div id="check-container">
        <input type="checkbox" name="check-cinto-seguranca" id="check-cinto-seguranca">
        <label for="check-cinto-seguranca">Cinto de Segurança</label>
      </div>
    <div id="check-container">
      <input type="checkbox" name="check-macacao-tyvcke" id="check-macacao-tyvcke">
      <label for="check-macacao-tyvcke">Macacão Tyvcke</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-touca-protecao" id="check-touca-protecao">
      <label for="check-touca-protecao">Touca de Protecão</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-respirador-poeira" id="check-respirador-poeira">
      <label for="check-respirador-poeira">Respirador p/Poeira em Suspensão</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-respirador-mecanico" id="check-respirador-mecanico">
      <label for="check-respirador-mecanico">Respirador Filtro Mecânico</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-capa-chuva" id="check-capa-chuva">
      <label for="check-capa-chuva">Capa de Chuva</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup } from '@/utils/checkboxGroupStyle'
styleCheckboxGroup()
</script>