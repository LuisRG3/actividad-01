import React from 'react';

export const Agregados = ({ agregado }) => {
  return (
    <div className="agregado">
        <p>{agregado.key} {agregado.count}</p>
      
    </div>
  );
};
