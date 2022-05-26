import { onMounted } from "vue";

const setPositioningContainers = () => {
  const containers = document.querySelectorAll('#check-container')
  containers.forEach((container) => {
    container.classList.add('flex')
    container.classList.add('items-center')
  })
}

const setCheckboxBehaviorOnInput = (isVisualizando) => {
  const inputs = document.querySelectorAll('input')
  inputs.forEach((input) => {
    input.classList.add('w-12')
    input.classList.add('h-12')
    input.classList.add('appearance-none')
    input.classList.add('disabled:bg-gray-200')
    input.classList.add('border-r-2')
    if (isVisualizando) input.setAttribute('disabled', true)
    const parent = input.parentElement
    // parent.addEventListener('click', () => {
    //   if (parent.classList.contains('marked-checkbox')) {
    //     parent.classList.remove('marked-checkbox')
    //   } else {
    //     parent.classList.add('marked-checkbox')
    //   }
    // })
    const label = document.querySelector(`label[for="${input.id}"]`)
    label.addEventListener('click', () => {
      if (parent.classList.contains('marked-checkbox')) {
        parent.classList.remove('marked-checkbox')
      } else {
        parent.classList.add('marked-checkbox')
      }
    })
  })
}

const setLabelsStyle = () => {
  const labels = document.querySelectorAll('label')
  labels.forEach((label) => {
    label.classList.add('pl-14')
    label.classList.add('text-sm')
    label.classList.add('whitespace-nowrap')
    label.classList.add('h-12')
    label.classList.add('leading-[3rem]')
    label.classList.add('w-full')
    label.classList.add('absolute')
    label.classList.add('text-left')
  })
}
export function styleCheckboxGroup(isVisualizando) {
  onMounted(() => {
    setPositioningContainers()
    setCheckboxBehaviorOnInput(isVisualizando)
    setLabelsStyle()
  })
}

export 

function markCheckedBox(arrayOfObj) {
  const inputs = document.querySelectorAll('input[type="checkbox"]')
  let counter = 0
  for (const input of inputs) {
    if (arrayOfObj[counter].isChecked) {
      const parent = input.parentNode
      parent.classList.add('marked-checkbox')
    }
    counter++
  }
}