import puppeteer from "puppeteer"
export async function Get(){
    const browser = await puppeteer.launch({headless:false, slowMo: 750});
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.click('[class="gLFyf gsfi"]');
    await page.$eval('.gLFyf', el => el.value = 'test@example.com');
    await page.$eval( '.gNO89b', form => form.click() );
    const [button] = await page.$x("//a[contains(., 'Imágenes')]");
if (button) {
    await button.click();
}
    await page.click('[class="rg_i Q4LuWd"]');
    await browser.close();
}
