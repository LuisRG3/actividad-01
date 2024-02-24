import { useState, useEffect } from 'react';

export const useProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8762/ms-buscador-products-elasticsearch/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        targetMethod: 'GET',
                        queryParams: {}
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProductos(data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Si hay un error, podrías querer manejarlo de alguna manera, como mostrar un mensaje al usuario.
            }
        };

        fetchData();
    }, []);

    return [productos, setProductos]; // Devolvemos tanto los productos como la función para establecer los productos
};