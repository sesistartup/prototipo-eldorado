<template>
  <div>
    <section id="signature-container">
      <main>
        <canvas id="signature-field">asdas</canvas>
      </main>
      <footer>
        <button @click="clearSignaturePad()">Limpar</button>
        <button @click="emitirApr()">Emitir</button>
      </footer>
    </section>
  </div>
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
      const email = sessionStorage.getItem('email')
      const payload = {
        signatureData: signatureData,
        email: email
      }
      await fetch('https://demo-eldorado.loca.lt/apr', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
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

<style scoped>
  #signature-field {
    border: 1px solid gray;
    border-radius: 15px;
  }
</style>