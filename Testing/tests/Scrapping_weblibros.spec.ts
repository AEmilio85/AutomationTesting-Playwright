import {test, expect} from 'playwright/test';

test('titulos libros ', async ({ page }) => {
  await page.goto('https://playwright.dev/');

// Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test ('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
test ('Seleccionar categoria Art', async ({ page }) => {
  await page.goto('https://books.toscrape.com/index.html');

// Selección categoría Art
  await page.getByRole('link', { name: 'Art', exact: true }).click();
}); 

test.beforeEach(async ({ page }) => {
  await page.goto("https://books.toscrape.com/catalogue/category/books/art_25/index.html");
});

test('Obtener títulos de libros en la categoría Art', async ({ page }) => {
  const titulos = await page.locator('.product_pod h3 a').allTextContents();
  console.log('Títulos de libros en la categoría Art:');
  titulos.forEach((titulo, i) => console.log(`${i+1}. ${titulo}`));
});

test('Obtener precios de libros en la categoría Art', async ({ page }) => {
  const precios = await page.locator('.product_pod .price_color').allTextContents();
  console.log('Precios de libros en la categoría Art:');
  precios.forEach((precio, i) => console.log(`${i+1}. ${precio}`));
});

test('Corroborar disponibilidad de libros en la categoría Art', async ({ page }) => {
  const disponibilidades = await page.locator('.product_pod .availability').allTextContents();
  console.log('Disponibilidad de libros en la categoría Art:');
  disponibilidades.forEach((disponibilidad, i) => console.log(`${i+1}. ${disponibilidad.trim()}`));
  
});

