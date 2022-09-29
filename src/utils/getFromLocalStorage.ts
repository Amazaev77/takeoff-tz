export const getFromLocalStorage = (name: string) =>
  JSON.parse(localStorage.getItem(name) as string)
