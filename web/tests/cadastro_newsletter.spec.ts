
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

 test('deve exibir erro ao informar e-mail inválido', async ({ page }) => {
  // Acessa o site do blog do Agibank
  await page.goto('https://blog.agibank.com.br/');

  // Clica no menu "Seus benefícios"
  await page
    .getByLabel('Primary Site Navigation')
    .getByRole('link', { name: 'Seus benefícios' })
    .click();

  // Clica no campo de e-mail e preenche com um e-mail inválido
  await page.getByRole('textbox', { name: 'Endereço de e-mail' }).click();
  await page.getByRole('textbox', { name: 'Endereço de e-mail' }).fill('teste@teste.com');

  // Clica no botão para tentar assinar a newsletter
  await page.getByRole('button', { name: 'Assinar' }).click();

  // Valida se a mensagem de erro foi exibida após a tentativa
  await expect(page.getByText('Ocorreu um erro ao assinar.')).toBeVisible();
});


test('deve exibir mensagem para confirmar assinatura no e-mail', async ({ page }) => {
  // Lê o e-mail salvo no arquivo .env
  const email = process.env.NEWSLETTER_EMAIL;

  // Interrompe o teste se a variável não tiver sido carregada
  if (!email) {
    throw new Error('A variável NEWSLETTER_EMAIL não foi carregada do arquivo .env');
  }

  // Acessa o site do blog do Agibank
  await page.goto('https://blog.agibank.com.br/');

  // Clica no menu "Seus benefícios"
  await page
    .getByLabel('Primary Site Navigation')
    .getByRole('link', { name: 'Seus benefícios' })
    .click();

  // Clica no campo de e-mail
  await page.getByRole('textbox', { name: 'Endereço de e-mail' }).click();

  // Preenche o campo com o e-mail vindo do .env
  await page.getByRole('textbox', { name: 'Endereço de e-mail' }).fill(email);

  // Clica no botão "Assinar"
  await page.getByRole('button', { name: 'Assinar' }).click();

  // Valida se a mensagem esperada apareceu
  await expect(
    page.getByText('Parece que você tentou fazer a assinatura com este e-mail')
  ).toBeVisible();
});