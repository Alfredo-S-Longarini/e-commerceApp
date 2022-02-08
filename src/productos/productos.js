const productos = [
    {
        tipo: 'procesadores',
        name: 'Procesador Ryzen 5 5600x',
        precio: '$46.000',
        precioList: '$52.000',
        imgUrl: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000065BOX_800.jpg',
        stock: 15,
        info: 'Los procesadores para juegos mejor valorados del mundo se llaman AMD Ryzen™ Serie 5000. Los más veloces del juego. Tecnologías de última generación.',
        id: 1
    },
    {
        tipo: 'procesadores',
        name: 'Procesador Ryzen 7 5800x',
        precio: '$63.500',
        precioList: '$70.000',
        imgUrl: 'https://www.compumar.com/cmweb/uploads/2021/07/12736-1.jpg',
        stock: 10,
        info: 'Los procesadores para juegos mejor valorados del mundo se llaman AMD Ryzen™ Serie 5000. Los más veloces del juego. Tecnologías de última generación.',
        id: 2
    },
    {
        tipo: 'procesadores',
        name: 'Procesador Ryzen 9 5900x',
        precio: '$87.000',
        precioList: '$98.000',
        imgUrl: 'https://static3.caseking.de/media/image/hpam-204_hpam_204_01.jpg',
        stock: 5,
        info: 'Procesador Ryzen 9 5900x muy rapido',
        id: 3
    },
    {
        tipo: 'placasDeVideo',
        name: ' Nvidia GTX 1650 Dual 4gb',
        precio: '$65.000',
        precioList: '$77.000',
        imgUrl: 'https://www.asus.com/media/global/gallery/q9qcrfsypt27nqos_setting_xxx_0_90_end_800.png',
        stock: 19,
        info: 'Las tarjetas gráficas ASUS Dual presentan una fórmula sencilla: dejan de lado las funciones que no afectan al rendimiento, utilizan dos potentes ventiladores con resistencia al polvo, una selección de componentes de calidad que se montan mediante un proceso de manufactura automatizado. El resultado es una plataforma que ofrece un nivel de rendimiento óptimo y es ideal para usuarios que quieren adentrarse en el mundo de los juegos triple A.',
        id: 4
    },
    {
        tipo: 'placasDeVideo',
        name: 'GeForce RTX 3060 Vision OC 12gb',
        precio: '$153.000',
        precioList: '$191.000',
        imgUrl: 'http://img.pccomponentes.com/articles/36/362218/1144-gigabyte-geforce-rtx-3060-vision-oc-12gb-gddr6.jpg',
        stock: 5,
        info: 'La potente serie GeForce RTX ™ 30 VISION acelera tu trabajo con incrementos increíbles en el rendimiento. Ya sea que esté haciendo EDICIÓN DE VÍDEO, ANIMACIÓN 3D, FOTOGRAFÍA, DISEÑO GRÁFICO, VISUALIZACIÓN ARQUITECTÓNICA o DIFUSIÓN, puede ahorrarte mucho tiempo.',
        id: 5
    },
    {
        tipo: 'placasDeVideo',
        name: 'GeForce colorful RTX 3060 ULTRA 12gb',
        precio: '$150.000',
        precioList: '$187.000',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2227/7667/products/iGameGeForceRTX3060TiUltraWOCLHR-V_1024x1024.jpg?v=1632511782',
        stock: 3,
        info: 'Las GPUs GeForce RTX™ Serie 30 proporcionan el rendimiento definitivo para los jugadores y los creadores. Cuentan con la tecnología Ampere, con la arquitectura de RTX de 2.ª generación de NVIDIA, con nuevos Núcleos RT, Núcleos Tensor y multiprocesadores de transmisión para potenciar los gráficos con ray tracing más realistas y las funciones de IA de vanguardia.',
        id: 6
    },
    {
        tipo: 'teclados',
        name: 'Teclado Logitech G Pro negro',
        precio: '$10.000',
        precioList: '$17.000',
        imgUrl: 'https://gnpoint.com.ar/181-large_default/teclado-logitech-gaming-g-pro-mechanical-black-us-gx-blue.jpg',
        stock: 7,
        info: 'Los profesionales pidieron, nosotros escuchamos. Con un diseño compacto e interruptores profesionales con clic perceptible, PRO X está probado por profesionales, ofrece garantía para torneos y se creó para ganar.',
        id: 7
    },
    {
        tipo: 'teclados',
        name: 'Teclado Logitech G915 TKL blanco',
        precio: '$23.000',
        precioList: '$32.000',
        imgUrl: 'https://www.invidcomputers.com/images/0000000000413100993341cc17dbe-9377-4013-b8c3-ccdd77f55e91-29ac15cf-48b7-4dcc-a563-6c896cbe0fc7-800x800.jpg',
        stock: 3,
        info: 'Un gran avance en diseño e ingeniería, ahora en combinaciones de colores en blanco y negro. G915 TKL incorpora tecnología inalámbrica LIGHTSPEED de calidad profesional, RGB LIGHTSYNC avanzada e interruptores mecánicos de perfil bajo y alto desempeño. Creado meticulosamente con materiales premium, el G915 TKL tiene un sofisticado diseño de incomparable belleza, resistencia y desempeño. Y ahora con un diseño aún más compacto. G915 TKL. Juega en la siguiente dimensión.',
        id: 8
    },
    {
        tipo: 'teclados',
        name: 'Razer Huntsman Mini negro',
        precio: '$12.200',
        precioList: '$16.500',
        imgUrl: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/18049_800.jpg',
        stock: 3,
        info: 'Switches ópticos Razer™ para un accionamiento a la velocidad de la luz Teclas de PBT de doble inyección con funciones secundarias impresas en el lateral para una calidad con textura prémium. Memoria integrada y preajustes de iluminación para llevar tu configuración donde quieras. Diseño reducido al 60 % para una experiencia de juego portátil y sencilla. Cable tipo C desmontable para instalar y guardar tu teclado fácilmente',
        id: 9
    },

]

export default productos;