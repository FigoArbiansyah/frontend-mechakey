const products = [
    {
        id: 1,
        name: 'Mechanical Keyboard Gamen',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt quisquam corporis, vel explicabo obcaecati dolorum repellat? Ipsam nisi, fuga temporibus porro, eaque obcaecati libero, a ullam asperiores illo natus.',
        price: 200000,
        switch_type: 'Cherry MX Blue',
        layout: 'QWERTY',
        backlight: true,
        connection: 'USB',
        stock: 50,
        thumbnail: 'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        images: [
            'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1626958390898-162d3577f293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1624696941338-934bf86c28b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ]
    },
    {
        id: 2,
        name: 'Mechanical Keyboard Gamen',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt quisquam corporis, vel explicabo obcaecati dolorum repellat? Ipsam nisi, fuga temporibus porro, eaque obcaecati libero, a ullam asperiores illo natus.',
        price: 200000,
        switch_type: 'Cherry MX Blue',
        layout: 'QWERTY',
        backlight: true,
        connection: 'USB',
        stock: 50,
        thumbnail: 'https://images.unsplash.com/photo-1626958390898-162d3577f293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        images: [
            'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1626958390898-162d3577f293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1624696941338-934bf86c28b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ]
    },
    {
        id: 3,
        name: 'Mechanical Keyboard Gamen',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt quisquam corporis, vel explicabo obcaecati dolorum repellat? Ipsam nisi, fuga temporibus porro, eaque obcaecati libero, a ullam asperiores illo natus.',
        price: 200000,
        switch_type: 'Cherry MX Blue',
        layout: 'QWERTY',
        backlight: true,
        connection: 'USB',
        stock: 50,
        thumbnail: 'https://images.unsplash.com/photo-1624696941338-934bf86c28b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        images: [
            'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1626958390898-162d3577f293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1624696941338-934bf86c28b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ]
    },
    {
        id: 4,
        name: 'Mechanical Keyboard Gamen',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt quisquam corporis, vel explicabo obcaecati dolorum repellat? Ipsam nisi, fuga temporibus porro, eaque obcaecati libero, a ullam asperiores illo natus.',
        price: 200000,
        switch_type: 'Cherry MX Blue',
        layout: 'QWERTY',
        backlight: true,
        connection: 'USB',
        stock: 50,
        thumbnail: 'https://images.unsplash.com/photo-1626958390898-162d3577f293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        images: [
            'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1626958390898-162d3577f293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1624696941338-934bf86c28b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ]
    },
];

export default products;