export function focusInputContainer(containerId, focusColor) {
  console.log('uai')
  const classes = focusColor.split(' ')
  const container = document.querySelector(`#${containerId}`)
  
  classes.forEach(clas => {
    container.classList.add(clas)
  });
  container.addEventListener('focusout', () => {  
    classes.forEach(clas => {
      if (container.classList.contains(clas)) container.classList.remove(clas)
    });
  })
}