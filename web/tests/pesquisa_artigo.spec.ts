
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

test('deve exibir erro ao informar e-mail inválido', async ({ page }) => {
  await page.goto('https://blog.agibank.com.br/');

  await page
    .getByLabel('Primary Site Navigation')
    .getByRole('link', { name: 'Seus benefícios' })
    .click();

  const emailInput = page.getByRole('textbox', { name: 'Endereço de e-mail' });

  await emailInput.fill('teste@teste.com');
  await page.getByRole('button', { name: 'Assinar' }).click();

  await expect(page.getByText('Ocorreu um erro ao assinar.')).toBeVisible();
});

test('deve exibir mensagem para confirmar assinatura no e-mail', async ({ page }) => {
  const email = process.env.NEWSLETTER_EMAIL;

  if (!email) {
    throw new Error('A variável NEWSLETTER_EMAIL não foi carregada do arquivo .env');
  }

  await page.goto('https://blog.agibank.com.br/');

  await page
    .getByLabel('Primary Site Navigation')
    .getByRole('link', { name: 'Seus benefícios' })
    .click();

  const emailInput = page.getByRole('textbox', { name: 'Endereço de e-mail' });

  await emailInput.fill(email);
  await page.getByRole('button', { name: 'Assinar' }).click();

  await expect(
    page.getByText('Parece que você tentou fazer a assinatura com este e-mail')
  ).toBeVisible();
});