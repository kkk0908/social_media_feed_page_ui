export function generateCustomerId() {
  return Math.floor(Math.random() * 1000);
}

export const currentTime = new Date().toISOString();