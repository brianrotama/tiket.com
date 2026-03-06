export class BasePage {

  constructor(page) {
    this.page = page;
  }

  async goto(url) {

  await this.page.goto(url);

  await this.handleModalIfPresent();

}

  async click(locator) {
    await locator.click();
  }

  async fill(locator, value) {
    await locator.fill(value);
  }

  async wait(seconds) {
    await this.page.waitForTimeout(seconds * 1000);
  }

  async handleModalIfPresent() {

  const modalOverlay = this.page.locator('[class*="modal_overlay"]');

  if (await modalOverlay.isVisible().catch(() => false)) {

    const closeButton = this.page.locator('button[class*="close"]');

    if (await closeButton.isVisible().catch(() => false)) {
      await closeButton.click();
    }

  }

}

}