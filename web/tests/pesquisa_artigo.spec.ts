
import { test, expect } from '@playwright/test';

test('deve permitir pesquisar artigos', async ({ page }) => {
  // Acessa o blog do Agibank
  await page.goto('https://blog.agibank.com.br/');

  // Espera a página ficar mais estável antes de interagir
  await page.waitForLoadState('networkidle');

  // Localiza a lupa no cabeçalho desktop
  const lupa = page.locator('#ast-desktop-header a[aria-label="Search button"]').first();

  // Clica na lupa
  // O force foi usado porque esse elemento apresentou instabilidade na automação
  await lupa.click({ force: true });

  // Localiza o campo de busca dentro do cabeçalho
  const pesquisar = page.locator('#ast-desktop-header input.search-field').first();

  // Preenche o campo de busca diretamente no DOM e envia o formulário
  // Essa abordagem foi usada porque o campo visual da busca estava instável para automação
  await pesquisar.evaluate((el, valor) => {
    const input = el as HTMLInputElement;

    // Define o valor digitado no campo
    input.value = valor as string;

    // Dispara o evento de input para o site reconhecer a digitação
    input.dispatchEvent(new Event('input', { bubbles: true }));

    // Dispara o evento de change para o site reconhecer a alteração do valor
    input.dispatchEvent(new Event('change', { bubbles: true }));

    // Envia o formulário da busca
    input.form?.submit();
  }, 'Empréstimo Pessoal');

  // Valida que a URL contém o parâmetro de busca
  await expect(page).toHaveURL(/[\?&]s=/);

  // Valida que a página de resultados foi exibida com o termo pesquisado
  await expect(
    page.getByRole('heading', {
      name: /Resultados encontrados para:\s*Empréstimo Pessoal/i,
    })
  ).toBeVisible();

  // Localiza o primeiro artigo listado no resultado da busca
  const primeiroArtigo = page.locator('article h2 a, article h3 a').first();

  // Rola a página até o primeiro artigo, caso ele esteja mais abaixo
  await primeiroArtigo.scrollIntoViewIfNeeded();

  // Valida que o artigo está visível antes do clique
  await expect(primeiroArtigo).toBeVisible();

  // Clica no primeiro artigo encontrado
  await primeiroArtigo.click();
});

test('abrir artigo e rolar até o final', async ({ page }) => {
  // Acessa o blog
  await page.goto('https://blog.agibank.com.br/');

  // Abre o menu
  await page.getByRole('link', { name: 'O Agibank Alternar menu' }).click();

  // Clica no artigo
  await page.getByRole('link', {
    name: 'Projetos sociais via leis de incentivo Agibank 2026: saiba como inscrever seu projeto',
    exact: true
  }).click();

  // Aguarda a página carregar
  await page.waitForLoadState('networkidle');

  // Rola a página aos poucos até o final
  await page.mouse.wheel(0, 1000);
  await page.mouse.wheel(0, 1000);
  await page.mouse.wheel(0, 1000);
  await page.mouse.wheel(0, 1000);
  await page.mouse.wheel(0, 1000);
});



