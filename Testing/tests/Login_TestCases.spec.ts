// Crear 4 casos de prueba para la funcionalidad de inicio de sesión.

import { test, expect } from '@playwright/test';

test('1. Iniciar sesión con credenciales válidas', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});

test('2. Intentar iniciar sesión sin credenciales', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
  await page.click('#login-button');

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});

test('3. Intentar iniciar sesión con credenciales inválidas', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', '123@TJK!asv');
  await page.click('#login-button');

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});

test('4. Intentar iniciar sesión sin usuario y password valido', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', '123@TJK!asv');
  await page.click('#login-button');

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});
