AutomationTesting-Playwright

Repositorio de pruebas automatizadas con Playwright, desarrollado con ayuda de una IA para practicar código, corregir y documentar el proceso.  
Este proyecto refleja mis primeras experiencias prácticando Automatización, cubriendo distintos escenarios de testing.

📂 Casos de prueba incluidos en este proyecto;
- `Enviar_emails.spec.ts` → Validación de envío de correos electrónicos.
- `Filtrar_items_Amazon.spec.js` → Filtrado y búsqueda de productos en Amazon.
- `Form_01.spec.js` / `Form_02.spec.js` → Validación de formularios web.
- `Login_ANTEL.spec.js` → Prueba de login en un escenraio real, portal ANTEL.
- `Login_TestCases.spec.ts` → Conjunto de casos de login con diferentes credenciales.
- `Saucedemo_preorder.spec.ts` → Flujo de compra en la aplicación SauceDemo.
- `Scrapping_weblibros.spec.ts` → Extracción de datos desde WebLibros.
- `table_scraper.spec.ts` → Automatización de scraping de tablas.

 🚀 Tecnologías utilizadas
- Playwright (automatización de navegadores)
- JavaScript / TypeScript
- Node.js
- JUnit XML / HTML reports (para evidencias de ejecución)
- Integración con **CI/CD en GitHub Actions**

 🎯 Objetivo del proyecto
- Demostrar habilidades en **automatización de pruebas end-to-end.  
- Cubrir escenarios variados: login, formularios, scraping, compras online y envío de emails.  
- Presentar un repositorio claro y profesional para reclutadores, con documentación y ejemplos prácticos.  

 ▶️ Ejecución de pruebas
Instalación y ejecución básica:

```bash
npm install
npx playwright test
npx playwright show-report
