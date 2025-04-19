# 🛒 GOFIX - eCommerce

**GOFIX** es una aplicación de eCommerce desarrollada con React. Permite a los usuarios navegar productos, filtrarlos por categoría, ver sus detalles y gestionar una compra completa mediante un carrito interactivo y un formulario de finalización de orden.

---

## 🚀 Funcionalidades

- 📦 **Listado de productos**: Visualización de todos los productos disponibles.
- 🔍 **Filtrado por categoría**: Muestra solo los productos de la categoría seleccionada.
- 🔎 **Detalle de producto**: Muestra la información detallada de cada producto (imagen, descripción, precio, etc.).
- 🛍️ **Carrito de compras**:
  - Agregar productos desde el listado o el detalle.
  - Aumentar o disminuir la cantidad de cada producto.
  - Eliminar productos individualmente.
- 💳 **Resumen de compra**: Visualiza el total del carrito y el detalle de cada producto agregado.
- 🧾 **Formulario de compra**: Permite finalizar la compra con un formulario de usuario.
- ✅ **Confirmación de orden**: Muestra un mensaje de éxito con el ID generado de la orden.

---

## 📦 Tecnologías y dependencias

| Dependencia               | Versión   | Documentación oficial                                      |
|---------------------------|-----------|-------------------------------------------------------------|
| **React**                 | 18.3.1    | [reactjs.org](https://reactjs.org/)                         |
| **React DOM**             | 18.3.1    | [reactjs.org/docs/react-dom.html](https://reactjs.org/docs/react-dom.html) |
| **React Router DOM**      | 7.4.0     | [reactrouter.com](https://reactrouter.com/en/main)          |
| **React Bootstrap**       | 2.10.9    | [react-bootstrap.netlify.app](https://react-bootstrap.netlify.app/) |
| **Bootstrap**             | 5.3.3     | [getbootstrap.com](https://getbootstrap.com/)               |
| **Firebase**              | 11.6.0    | [firebase.google.com/docs](https://firebase.google.com/docs)|
| **React Toastify**        | 11.0.5    | [react-toastify.com](https://fkhadra.github.io/react-toastify/introduction) |
| **SweetAlert2**           | 11.6.13   | [sweetalert2.github.io](https://sweetalert2.github.io/)     |
| **SweetAlert2 React**     | 5.1.0     | [github.com/sweetalert2/sweetalert2-react-content](https://github.com/sweetalert2/sweetalert2-react-content) |

---

## 🧰 Estructura del proyecto

```
/src
 ├── /assets             # Imágenes, íconos, estilos generales
 ├── /components         # Componentes reutilizables
 ├── /context            # Contexto de React (ej: CartContext)
 ├── /firebase           # Configuración de Firebase
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/tu-usuario/gofix-ecommerce.git
```

2. Instalá las dependencias:

```bash
npm install
```

3. Ejecutá el proyecto localmente:

```bash
npm run dev
```

---

## ✍️ Autor

Desarrollado por **Sebastián Gallegos**  
📧 [seba.gallegos@gmail.com](mailto:seba.gallegos@gmail.com)

---

¡Gracias por visitar GOFIX! 💼✨
```