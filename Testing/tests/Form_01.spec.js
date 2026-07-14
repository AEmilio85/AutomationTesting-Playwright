const { test, expect } = require('@playwright/test');

test('Llenar formulario con capturas en el reporte', async ({ page }, testInfo) => {
  // Navegar a la página
  await page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded' });

  // Captura y adjunta al reporte
  await testInfo.attach('Home Page', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });

  // Ir a Elements
  await page.getByText('Elements').click();
  await testInfo.attach('Elements Menu', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
  // Ir a Text Box
  await page.getByText('Text Box').click();
  await testInfo.attach('Text Box Form', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
  // Llenar el formulario
  await page.locator('#userName').fill('Armando Lio');
  await page.locator('#userEmail').fill('test.qa@example.com');
  await page.locator('#currentAddress').fill('123 Aqui Estoy');
  await page.locator('#permanentAddress').fill('456 Del Sol');
  // Captura después de llenar el formulario
  await testInfo.attach('#permanentAddress', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
  // Enviar el formulario
  await page.getByRole('button', { name: 'Submit' }).click();

  await testInfo.attach('Formulario lleno', {
  body: await page.screenshot(),
  contentType: 'image/png'
});


  });


// npx playwright show-report 
// npx playwright test --headed