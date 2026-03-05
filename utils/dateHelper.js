export async function selectFutureDate(page, monthOffset) {

  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + monthOffset);

  const day = targetDate.getDate();
  const month = targetDate.toLocaleString('id-ID', { month: 'long' });
  const year = targetDate.getFullYear();
  const weekday = targetDate.toLocaleString('id-ID', { weekday: 'long' });

  const fullLabel = `${day} ${month} ${year} ${weekday}`;

  const nextMonthButton = page.getByRole('button', { name: /bulan berikutnya/i });

  let safetyCounter = 0;

  while (true) {

    const dateLocator = page.getByRole('button', { name: fullLabel });

    if (await dateLocator.isVisible().catch(() => false)) {
      await dateLocator.click();
      break;
    }

    await nextMonthButton.click();

    safetyCounter++;

    if (safetyCounter > 12) {
      throw new Error(`Date ${fullLabel} not found in calendar`);
    }

  }
}