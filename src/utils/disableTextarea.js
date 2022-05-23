
import { useRoute } from 'vue-router'

export function disableTextarea() {
  const route = useRoute()
  if (route.query.isVisualizing === 'true') {
    const textarea = document.querySelector('textarea')
    textarea.setAttribute('disabled', true)
  } 
}