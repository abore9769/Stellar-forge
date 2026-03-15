// Formatting utilities

export const formatXLM = (amount: string | number): string => {
  return `${parseFloat(amount.toString()).toFixed(7)} XLM`
}

export const truncateAddress = (address: string, startChars: number = 6, endChars: number = 4): string => {
  if (address.length <= startChars + endChars) return address
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`
}

export const stroopsToXLM = (stroops: number | string): number => {
  return parseFloat(stroops.toString()) / 10000000
}

export const xlmToStroops = (xlm: number | string): number => {
  return Math.floor(parseFloat(xlm.toString()) * 10000000)
}