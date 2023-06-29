export function capitalize(str: string): string {
  return str
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
