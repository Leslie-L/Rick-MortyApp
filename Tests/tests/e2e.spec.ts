import { test, expect } from '@playwright/test';

test('charge the firsts characters', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  //Count how much anchors should be
  //The api returns 20 characters + the logo
  const list = page.getByRole('link');
  await expect(list).toHaveCount(21);
  //Check that when i press a character i can see their info
  const checkRick = page.getByRole('link',{name:'Rick Sanchez'})
  await checkRick.click();
  //check if i change of url
  await expect(page).toHaveURL('http://localhost:5173/#/1/');
  //check if the info is displayed
  await expect(page.getByText('Rick Sanchez')).toBeVisible();
});
test('check if i am able to search a character',async({page})=>{
    await page.goto('http://localhost:5173/');
    //fill the form
    await page.getByPlaceholder('Search a character').fill('Alexander')
    await page.getByRole('button',{name:'Search 🔍'}).click()
    //do a seach
    await expect(page).toHaveURL('http://localhost:5173/#/search/Alexander/')
    const list = await page.getByRole('link');
    await expect(list).toHaveCount(2)

})
test('check if i get more results to press the button more results', async({page})=>{
  await page.goto('http://localhost:5173/');
  await page.getByRole('button',{name:'+ More Characters'}).click()

  const list = await page.getByRole('link');
  await expect(list).toHaveCount(41)

  await page.getByRole('button',{name:'+ More Characters'}).click()
  const list2 = await page.getByRole('link');
  await expect(list2).toHaveCount(61)
})
