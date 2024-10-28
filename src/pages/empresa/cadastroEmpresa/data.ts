// Função para aplicar a máscara ao CNPJ
export function maskCNPJ(cnpj: string): string {
    return cnpj
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{4})/, '$1/$2')
      .replace(/(\d{4})(\d{2})$/, '$1-$2');
  }
  
  // Função para validar o CNPJ
  export function validateCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/\D/g, '');
  
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  
    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    const digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;
  
    for (let i = length; i >= 1; i--) {
      sum += parseInt(numbers.charAt(length - i)) * pos--;
      if (pos < 2) pos = 9;
    }
  
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) return false;
  
    length += 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
  
    for (let i = length; i >= 1; i--) {
      sum += parseInt(numbers.charAt(length - i)) * pos--;
      if (pos < 2) pos = 9;
    }
  
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return result === parseInt(digits.charAt(1));
  }
  
  // Função para validar email (permanece a mesma)
  export function validateEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  