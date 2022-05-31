<template>
  <section class="h-full flex flex-col justify-center  max-w-xs  w-full" id="signature-container">
    <main>
      <h3 class="text-left w-5/6 mx-auto">Sua assinatura:</h3>
      <canvas class="rounded-xl border-2 border-gray drop-shadow-lg w-5/6 mx-auto" id="signature-field" />
    </main>
    <footer class="mt-5 flex justify-evenly">
      <!-- <button class="std-button button-negative-action" @click="clearSignaturePad()">Reprovar</button> -->
      <button class="std-button button-neutral-action" @click="clearSignaturePad()">Limpar</button>
      <button class="std-button button-positive-action" @click="emitirApr()">Emitir</button>
    </footer>
  </section>
</template>

<script setup>
import SignaturePad from 'signature_pad'
import { onMounted } from 'vue';
  // export default {
  //   methods: {
  //     injectSignaturePad() {
  //       const canvas = document.querySelector('#signature-field')
  //       const signaturePad = new SignaturePad(canvas)
  //       signaturePad.addEventListener('beginStroke', () => {
  //         console.log('funcionou')
  //       }, { once: true })
  //     },
  //     clearSignaturePad() {
  //       const canvas = document.querySelector('#signature-field')

  //     }
  //   },
  //   mounted() {
  //     this.injectSignaturePad()
  //   }
  // }
  const injectSignaturePad = () => {
    const canvas = document.querySelector('#signature-field')
    const signaturePad = new SignaturePad(canvas)
    signaturePad.addEventListener('beginStroke', () => {
      console.log('funcionou')
    }, { once: true })
    return signaturePad
  }
  const clearSignaturePad = () => {
    signaturePad.clear()
  }
  let signaturePad
  const emitirApr = async () => {
    if (!signaturePad.isEmpty()) {
      const signatureData = signaturePad.toData()
      const user = JSON.parse(sessionStorage.getItem('user'))
      const payload = {
        signatureData: signatureData,
        email: user.email
      }
      await fetch('https://demo-eldorado.loca.lt/apr', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'Bypass-Tunnel-Reminder': 'Hi tunnel'
        },
      });
    } else {
      alert('Você precisa assinar a apr')
    }
  }
  onMounted(() => {
    signaturePad = injectSignaturePad()
  })
</script>