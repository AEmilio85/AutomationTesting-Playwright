import { test } from '@playwright/test';

// Definición de la interfaz para los datos personales de los empleados
interface Datospersonales {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  salary: string;
  department: string;
}

test('Recolectar todas las filas de la tabla en DemoQA', async ({ page }) => {
  await page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded' });

  await page.getByText('Elements').click();
  await page.getByText('Web Tables').click();
 
  const tableContainer = page.locator('//table[contains(@class, "table-striped")]');
  const rows = await tableContainer.locator('tbody tr').all();

  const empleados: Datospersonales[] = [];

  for (let i = 0; i < rows.length; i++) {
    const cells = await rows[i].locator('td').allTextContents();
    const withoutAction = cells.slice(0, -1); // quitamos la columna "Action"

    const empleado: Datospersonales = {
      firstName: withoutAction[0],
      lastName: withoutAction[1],
      age: withoutAction[2],
      email: withoutAction[3],
      salary: withoutAction[4],
      department: withoutAction[5],
    };

    empleados.push(empleado);
  }

  console.log('Empleados:', empleados); 

});

/*
                --- ACLARACION ---

--> Navegar por las celdas de la tabla en el navegador
//table[contains(@class, 'table-striped')]//tr[1]//td[6]

--> tr -> filas
--> td -> columnas

--> Xpath del elemento tabla
//table[contains(@class, 'table-striped')]

*/

