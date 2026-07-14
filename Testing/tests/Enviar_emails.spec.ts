// Crear enviar emails de manera automatizada

import { test, expect } from '@playwright/test';

test('1. Iniciar sesión con credenciales válidas', async ({ page }, testInfo) => {
    await page.goto('https://correo.vera.com.uy/', { waitUntil: 'domcontentloaded' });
    await page.fill('#username', 'casosdepruebalogin');
    await page.fill('#password', 'Mipasses123!');
    await page.getByRole('button', { name: 'Ingresar' }).click();

    // Crear mensaje
    await page.getByText('Nuevo mensaje').click();

    // Llenar campo "Para"   
    const correos = [
  'vixeno7884@ezimb.com', 
  'cmtpk2kb10@bltiwd.com', 
  'boring.stingray.evir@hidepost.net'
];

const campoDestinatario = page.locator('#zb__COMPOSE-1__TO_title');

for (const correo of correos) {
  await campoDestinatario.pressSequentially(correo);
  await campoDestinatario.press('Enter'); 
}

    // Asunto
    await page.locator('#zv__COMPOSE-1_subject_control').fill('Prueba_de_envio_mensaje'); 

    // Cuerpo del mensaje 
   // 1. Localizaz el iframe del editor
const frame = page.frameLocator('iframe[id^="ZmHtmlEditor"]');

// 2. Escribir dentro del cuerpo del iframe (TinyMCE usa el id 'tinymce' en el body)
await frame.locator('body#tinymce').fill('Este es un mensaje automatizado con Playwright ⚠️😎✔️📨');

    // Enviar mensaje
    await page.locator('#zb__COMPOSE-1__SEND_title').click();

    // Verificar en Enviados
    await expect(frame.locator('body#tinymce')).toContainText('Este es un mensaje automatizado');

    // Captura y adjunta al reporte
    await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});



