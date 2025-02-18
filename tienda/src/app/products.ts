export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    caracteristicas: string[];
    garantia: {
      periodo: string;
      tipo: string;
    };
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      stock: 20,
      caracteristicas: ['Pantalla de 6 pulgadas', ' Procesador de 8 nucleos', ' 4 GB de RAM', ' 64 GB de almacenamiento'],
      garantia: {
        periodo: "2 años",
        tipo:"Fabricante"
      }
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      stock: 3,
      caracteristicas: ['Pantalla de 2 pulgadas', 'Procesador de 3 nucleos', '6 GB de RAM', '124 GB de almacenamiento'],
      garantia: {
        periodo: "5 años",
        tipo:"Fabricante"
      }
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      stock: 0,
      caracteristicas: ['Pantalla de 8 pulgadas', 'Procesador de 6 nucleos', '3 GB de RAM', '50 GB de almacenamiento'],
      garantia: {
        periodo: "1 años",
        tipo:"Fabricante"
      }
    }
  ];