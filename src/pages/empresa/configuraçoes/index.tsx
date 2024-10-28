import { Button } from '@/assets/components/button/button';
import Input from '@/assets/components/input/input';
import React, { useState } from 'react';

const ConfiguracaoEmpresa: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    NomeEmpresa: '',
    email: '',
    QtdFuncionarios: '',
    Telefone: ''
  });
  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    pais: "",
    complemento: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save the formData
    console.log('Saving new information:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Configurações</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Nome da empresa</label>
            <input
              type="text"
              name="companyName"
              value={formData.NomeEmpresa}
              onChange={handleChange}
              placeholder="Digite o nome da empresa"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <Input
                label='Número de funcionários'
              type="number"
              name="employees"
              value={formData.QtdFuncionarios}
              onChange={handleChange}
              placeholder="Digite o número de funcionários"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <Input
              label='CEP'
              type="text"
              name="CEP"
              value={endereco.cep}
              onChange={handleChange}
              placeholder="Digite o CEP"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <Input
             label='Telefone'
              type="text"
              name="phone"
              value={formData.Telefone}
              onChange={handleChange}
              placeholder="Digite o telefone"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="md:col-span-2">
            <Input
             label='Email'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite o email"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Button
              type="submit"
              className="bg-indigo-700 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Salvar novas informações
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfiguracaoEmpresa;
