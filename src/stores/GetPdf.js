import puppeteer from 'puppeteer';
import * as fs from 'fs';
export async function Get(search) {
	const browser = await puppeteer.launch({ headless: false, slowMo: 750 });
	const page = await browser.newPage();
	await page.goto('https://google.com');
	await page.click('[class="gLFyf gsfi"]');
	await page.$eval('.gLFyf', (el) => (el.value = search));
	await page.$eval('.gNO89b', (form) => form.click());
	const [button] = await page.$x("//a[contains(., 'Imágenes')]");
	if (button) {
		await button.click();
	}
	await page.click('[class="rg_i Q4LuWd"]');
	const imgs = await page.$$eval('img.n3VNCb[src]', (imgs) =>
		imgs.map((img) => img.getAttribute('src'))
	);
	console.log(imgs);
	const pageNew = await browser.newPage();
	const response = await pageNew.goto(imgs[0], { timeout: 0, waitUntil: 'networkidle0' });
	const buffer = await response?.buffer();
	await fs.promises.writeFile('src\\images\\DailyPicture\\daily.png', buffer);
	await page.close();
	await pageNew.close();
	await browser.close();
}
