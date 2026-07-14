const { test, expect } = require('@playwright/test');
const fs = require('fs'); 

test('Buscar un producto en Amazon; filtrar por envio gratis, precio y caracteristica', async ({ page }, testInfo) => {
  // Navegar a Amazon
  await page.goto('https://www.amazon.com/', { waitUntil: 'domcontentloaded' });

  // Captura inicial
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });

  // Buscar un producto
  await page.locator('#twotabsearchtextbox').fill('heladera');
  await page.locator('#nav-search-submit-button').click();

  // Esperar a que cargue la estructura de la página de resultados
  await expect(page.locator('span.a-color-state')).toContainText('heladera');

  // Captura final
  await testInfo.attach('Resultados filtrados', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });

});
  
