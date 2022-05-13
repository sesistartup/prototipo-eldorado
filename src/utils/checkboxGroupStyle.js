import { onMounted } from "vue";

const setPositioningContainers = () => {
  const containers = document.querySelectorAll('#check-container')
  containers.forEach((container) => {
    container.classList.add('flex')
    container.classList.add('items-center')
  })
}

const setCheckboxBehaviorOnInput = () => {
  const inputs = document.querySelectorAll('input')
  inputs.forEach((input) => {
    input.classList.add('w-4')
    input.classList.add('h-4')
    input.addEventListener('input', () => {
      const label = document.querySelector(`label[for="${input.id}"]`)
      if (label.classList.contains('font-semibold')) {
        label.classList.remove('font-semibold')
      } else {
        label.classList.add('font-semibold')
      }
    })
  })
}

const setLabelsStyle = () => {
  const labels = document.querySelectorAll('label')
  labels.forEach((label) => {
    label.classList.add('px-2')
    label.classList.add('text-sm')
    label.classList.add('whitespace-nowrap')
  })
}
export function styleCheckboxGroup() {
  onMounted(() => {
    setPositioningContainers()
    setCheckboxBehaviorOnInput()
    setLabelsStyle()
  })
}