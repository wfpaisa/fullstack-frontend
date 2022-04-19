/**
 * Date and time long format
 */
export const formatDateTimeLarge = (value: string) => {
  return new Date(value).toLocaleDateString("es-CO", {
    weekday: "long", // "long" | "short" | "narrow"
    day: "2-digit", // "numeric | 2-digit"
    month: "long", // "numeric | 2-digit" | "long" | "short" | "narrow"
    year: "numeric", // "numeric | 2-digit"
    hour: "2-digit", // "numeric | 2-digit"
    minute: "numeric", // "numeric | 2-digit"
    hourCycle: "h12", // "h11" | "h12" | "h23" | "h24"
  })
}

/**
 * Date long format
 */
export const formatDateLarge = (value: string) => {
  return new Date(value).toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  })
}

/**
 * Date and time short format
 */
export const formatDateTimeShort = (value: string) => {
  return new Date(value).toLocaleDateString("es-CO", {
    hour: "2-digit",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  })
}

/**
 * Date short format
 */
export const formatDateShort = (value: string) => {
  return new Date(value).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  })
}
