import { test, expect } from "@playwright/test";

test("Comprar un producto", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  const itemsContainer = await page
    .locator("#inventory_container .inventory_item")
    .all();
  const randomIndex = Math.floor(Math.random() * itemsContainer.length);
  const randomItem = itemsContainer[randomIndex];

  const expectedDescription = await randomItem
    .locator(".inventory_item_desc")
    .innerText();
  const expectedName = await randomItem
    .locator(".inventory_item_name")
    .innerText();
  const expectedPrice = await randomItem
    .locator(".inventory_item_price")
    .innerText();

  console.log(
    `Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription}`,
  );

  await randomItem.getByRole("button", { name: "Add to cart" }).click();

  await page.locator("a.shopping_cart_link").click();

  // await page.pause();

  expect(page.getByRole("button", { name: "Checkout" })).toBeVisible();

  // Obtener los detalles del producto en el carrito
  const actualName = await page.locator(".inventory_item_name").innerText();
  const actualDescription = await page
    .locator(".inventory_item_desc")
    .innerText();
  const actualPrice = await page.locator(".inventory_item_price").innerText();

  // Validar que los detalles del producto en el carrito coincidan con los detalles del producto seleccionado
  expect(actualName).toEqual(expectedName);
  expect(actualDescription).toEqual(expectedDescription);
  expect(actualPrice).toEqual(expectedPrice);

  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByRole("textbox", { name: "First Name" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Last Name" }).fill("sauce_demo");
  await page.getByRole("textbox", { name: "Zip/Postal Code" }).fill("12345");
  await page.getByRole("button", { name: "Continue" }).click();

  expect(actualName).toEqual(expectedName);
  expect(actualDescription).toEqual(expectedDescription);
  expect(actualPrice).toEqual(expectedPrice);

  await page.getByRole("button", { name: "Finish" }).click();

  await expect(
    page.getByRole("heading", {
      name: "Thank you for your order!",
    }),
  ).toBeVisible();

  //tomar captura del producto comprado
  await page.screenshot({ path: "confirmacion_compra.png" });

  console.log("Captura de pantalla guardada: confirmacion_compra.png");
});
