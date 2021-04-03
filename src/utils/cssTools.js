import { css } from 'styled-components';

export function convertToCSS(property, value) {
  let newValue = isCSSVariable(value) ? `var(${value})` : value;

  return (
    css`
      ${property}: ${newValue}
    `
  )
}

export const isCSSVariable = (value) => {
  // begins with "--"
  return value.match(/^--/)
}