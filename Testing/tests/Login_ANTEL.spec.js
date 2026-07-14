// Crear 3 casos de prueba para la funcionalidad de inicio de sesión en ANTEL.

import { test, expect } from '@playwright/test';

test('1. Iniciar sesión con credenciales válidas', async ({ page }, testInfo) => {
  await page.goto('https://correo.vera.com.uy/', { waitUntil: 'domcontentloaded' });
  await page.fill('#username', 'casosdepruebalogin');
  await page.fill('#password', 'Mipasses123!');
  await page.getByRole('button', { name: 'Ingresar' }).click();

  

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});

test('2. Intentar iniciar sesión sin credenciales', async ({ page }, testInfo) => {
  await page.goto('https://correo.vera.com.uy/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Ingresar' }).click();
  

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});

test('3. Intentar iniciar sesión con credenciales inválidas', async ({ page }, testInfo) => {
  await page.goto('https://correo.vera.com.uy/', { waitUntil: 'domcontentloaded' });
  await page.fill('#username', 'invalid_user');
  await page.fill('#password', 'Mipasses123!');
  await page.getByRole('button', { name: 'Ingresar' }).click();

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});
