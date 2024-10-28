import React, { useEffect, useState } from 'react';
import loading from '../loading.svg'

const PreloadingE: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Timer para simular 0.5 segundos de loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Listener para remover o preloader quando a página carregar
    window.onload = () => {
      setIsLoading(false);
    };

    // Limpar o timer quando o componente desmontar
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; // Não renderizar o preloader se já tiver carregado

  return (
    <div id="preloader" style={preloaderStyle} >
      <img src={loading} className='w-32 h-32 animate-spin'></img>
    </div>
  );
};

// Estilos inline para o preloader
const preloaderStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#130633',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,

};

export default PreloadingE;
