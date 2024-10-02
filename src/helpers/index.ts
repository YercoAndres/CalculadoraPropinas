export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0 // Pesos chilenos no usan decimales
    }).format(quantity);
  }
  