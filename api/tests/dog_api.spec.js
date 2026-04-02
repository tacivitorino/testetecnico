// @ts-check
import { test, expect } from '@playwright/test';
import { json } from 'node:stream/consumers';

test.describe('Dog API', () => {
  test('deve listar todas as raças com formato válido', async ({ request }) => {
    const response = await request.get('https://dog.ceo/api/breeds/list/all');
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    console.log(JSON.stringify(body, null, 2));

  });

  test('deve retornar imagens da raça informada', async ({ request }) => {
    const breed = 'hound';

    const response = await request.get(`https://dog.ceo/api/breed/hound/images`);
    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log('=== RESPOSTA /breed/{breed}/images ===');
    console.log(JSON.stringify(body, null, 2));

    expect(body.status).toBe('success');
    expect(Array.isArray(body.message)).toBeTruthy();
    expect(body.message.length).toBeGreaterThan(0);

    for (const imageUrl of body.message) {
      expect(typeof imageUrl).toBe('string');
      expect(imageUrl).toContain('https://');
    }
  });

  
  const breeds = [
    'affenpinscher',
    'airedale',
    'akita',
    'appenzeller',
    'basenji',
    'beagle',
    'bluetick',
    'borzoi',
    'bouvier',
    'brabancon',
    'briard'
  ];

  for (const breed of breeds) {
    test(`deve retornar imagens da raça ${breed}`, async ({ request }) => {
      const response = await request.get(`https://dog.ceo/api/breed/${breed}/images`);
      expect(response.status()).toBe(200);

      const body = await response.json();

      console.log(`=== RESPOSTA DA RAÇA: ${breed} ===`);
      console.log(JSON.stringify(body, null, 2));

      expect(body.status).toBe('success');
      expect(Array.isArray(body.message)).toBe(true);
      expect(body.message.length).toBeGreaterThan(0);
    });
  }

  test('deve retornar erro ao consultar uma raça inexistente', async ({ request }) => {
    const response = await request.get('https://dog.ceo/api/breed/raca-inexistente-xyz/images');
    expect(response.status()).toBe(404);

    const body = await response.json();

    console.log('=== RESPOSTA TESTE NEGATIVO ===');
    console.log(JSON.stringify(body, null, 2));

    expect(body.status).toBe('error');
    expect(body.message).toBeTruthy();
  });

  test('deve retornar erro ao consultar uma sub-raça como raça principal', async ({ request }) => {
    const response = await request.get('https://dog.ceo/api/breed/shepherd/images');
    expect(response.status()).toBe(404);

    const body = await response.json();

    console.log('=== RESPOSTA SUB-RAÇA INVÁLIDA COMO RAÇA ===');
    console.log(JSON.stringify(body, null, 2));

    expect(body.status).toBe('error');
    expect(body.message).toBeTruthy();
  });
});