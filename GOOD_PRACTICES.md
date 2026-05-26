# Guía de Buenas Prácticas Frontend

## 1. Organización de componentes

- Mantener los componentes separados según su funcionalidad.
- Utilizar carpetas organizadas para componentes, secciones y datos.
- Reutilizar componentes para evitar duplicación de código.

---

## 2. Convenciones de nomenclatura

- Utilizar PascalCase para componentes React.
- Utilizar camelCase para variables y funciones.
- Mantener nombres descriptivos y claros.

Ejemplos:

```jsx
Navbar.jsx
ServiceCard.jsx
handleSubmit()
```

---

## 3. Estructura del proyecto

```plaintext
src/
├── components/
├── sections/
├── data/
├── assets/
```

- components/: componentes reutilizables
- sections/: secciones principales
- data/: datos simulados o APIs
- assets/: imágenes y recursos

---

## 4. Uso de Tailwind CSS

- Mantener clases ordenadas y legibles.
- Utilizar utilidades responsive.
- Evitar estilos duplicados.

---

## 5. Accesibilidad

- Utilizar etiquetas semánticas.
- Agregar atributos alt en imágenes.
- Utilizar aria-label en botones importantes.
- Mantener buen contraste visual.

---

## 6. Optimización

- Utilizar lazy loading en imágenes.
- Minimizar renderizados innecesarios.
- Optimizar imágenes utilizadas.

---

## 7. Formularios

- Validar campos obligatorios.
- Validar formato de correo electrónico.
- Mostrar mensajes claros al usuario.

---

## 8. Git y GitHub

- Utilizar commits descriptivos.
- Mantener respaldo constante del proyecto.
- Trabajar mediante ramas cuando sea necesario.

Ejemplo:

```bash
git commit -m "Add responsive navbar"
```

---

## 9. Responsive Design

- Diseñar primero pensando en dispositivos móviles.
- Probar en distintos tamaños de pantalla.
- Utilizar Flexbox y Grid correctamente.

---

## 10. Consumo de API

- Utilizar fetch() correctamente.
- Manejar estados de carga.
- Implementar manejo básico de errores.

---

## 11. Seguridad básica

- Validar formularios del lado cliente.
- Evitar datos vacíos o inválidos.
- Utilizar enlaces externos seguros con:
```jsx
rel="noopener noreferrer"
```