// Form 02 -- Dropdown and Checkboxes exercise. 

const { test, expect } = require('@playwright/test');

test('Formulario completo con pasos', async ({ page }) => {
  await page.goto('https://demoqa.com/', { waitUntil: 'networkidle' });

  await page.click('text=Forms');
  await page.waitForSelector('text=Practice Form', { state: 'visible' });
  await page.getByText('Practice Form').click();

  await test.step('Completar nombre y apellido', async () => {
    await page.locator('#firstName').fill('Armando');
    await page.locator('#lastName').fill('Lio');
  });

  await test.step('Seleccionar género y teléfono', async () => {
    await page.locator('#gender-radio-1').check();
    await page.locator('#userNumber').fill('0991234560');
  });

  await test.step('Completar fecha de nacimiento', async () => {
    const dateOfBirthInput = page.locator('#dateOfBirthInput');
    await dateOfBirthInput.click();
    await page.keyboard.type('30 Apr 1985');
    await page.keyboard.press('Enter');
  });

  await test.step('Seleccionar materias y hobbies', async () => {
    await page.locator('.subjects-auto-complete__input').type('Math');
    await page.keyboard.press('Enter');
    await page.locator('.subjects-auto-complete__input').type('Sports');
    await page.keyboard.press('Enter');

    await page.locator('#hobbies-checkbox-1').check();
    await page.locator('#hobbies-checkbox-3').check();
  });

  await test.step('Subir archivo y dirección', async () => {
    await page.locator('#uploadPicture').setInputFiles('C:\\Users\\alcid\\Desktop\\avatar.png');
    await page.locator('#currentAddress').fill('Calle del Sol. Esquinas: entre la Luna y la Sombra');
  });

  await test.step('Seleccionar estado y ciudad', async () => {
    await page.locator('#state').click({ force: true });
    await page.getByText('NCR').click({ force: true });
    await page.locator('#city').click({ force: true });
    await page.getByText('Delhi').click({ force: true });
  });

  await test.step('Enviar formulario y captura', async () => {
  await page.getByRole('button', { name: 'Submit' }).click({ force: true });
  await testInfo.attach('Formulario completo', {
      body: await page.screenshot(),
      contentType: 'image/png'
    });
  });
  await page.getByRole('dialog', { name: 'Thanks for submitting the form' });
  await page.locator('.modal-content').click();
  await page.getByRole('dialog', { name: 'Thanks for submitting the form' }).press('Escape');
  });


