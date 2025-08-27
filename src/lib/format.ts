export function formatPrice(price: number) {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

export function formatToPhoneMask(value?: string): string {
  if (!value) return ''

  const clearedValue = value.replace(/\D/g, '')

  const formattedValue = generatePhoneMask(clearedValue)

  return formattedValue
}

export const generatePhoneMask = (cleaned: string) => {
  // +998 (99) 999 99 99

  if (cleaned.length < 12) cleaned = `998${cleaned}`

  const parts = [
    `+${cleaned.slice(0, 3)}`, // Country code
    `(${cleaned.slice(3, 5)})`, // First group (region/operator code)
    cleaned.slice(5, 8), // Second group (main number)
    cleaned.slice(8, 10), // Third group
    cleaned.slice(10, 12) // Fourth group
  ]

  // Filter out empty parts and format
  return parts.filter((part) => part.length > 0).join(' ')
}

export function clearPhoneMask(value: string = '', hidePlus = false) {
  const digits = value.replace(/\D/g, '') // Remove non-digit characters
  return hidePlus ? digits : `+${digits}`
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ru-RU')
}

export const formatDateAndTime = (date?: string | null) => {
  if (!date) return ''

  return new Date(date).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
