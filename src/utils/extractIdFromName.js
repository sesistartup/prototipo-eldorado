export const extractIdFromName = (name) => {
  const id = name.toLowerCase()
  return id.replaceAll(' ', '-')
}