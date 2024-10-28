// data.ts

// Função para validar CPF
export const validateCPF = (cpf: string): boolean => {
    // Implementar a lógica de validação do CPF
    // Exemplo básico de verificação de formato (não é uma validação completa)
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  };
  
  // Função para validar CNPJ
  export const validateCNPJ = (cnpj: string): boolean => {
    // Implementar a lógica de validação do CNPJ
    // Exemplo básico de verificação de formato (não é uma validação completa)
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    return cnpjRegex.test(cnpj);
  };
  
  // Função para validar email
  export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Função para mascarar CPF
  export const maskCPF = (cpf: string): string => {
    return cpf.replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d{2})$/, '$1-$2');
  };
  
  // Função para mascarar CNPJ
  export const maskCNPJ = (cnpj: string): string => {
    return cnpj.replace(/(\d{2})(\d)/, '$1.$2')
               .replace(/(\d{3})(\d)/, '$1.$2')
               .replace(/(\d{3})(\d{4})/, '$1/$2')
               .replace(/(\d{4})(\d{2})$/, '$1-$2');
  };
  
  