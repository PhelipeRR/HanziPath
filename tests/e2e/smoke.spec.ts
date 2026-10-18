import { test, expect } from '@playwright/test'
test('abre dashboard e navega para o dicionário', async ({ page }) => { await page.goto('/'); await expect(page.getByText('Pequenos passos, grande jornada.')).toBeVisible(); await page.goto('/characters'); await expect(page.getByText('Dicionário de caracteres')).toBeVisible() })
test('abre aula e leitor', async ({ page }) => { await page.goto('/lessons/1'); await expect(page.getByText('Vamos começar com uma conversa.')).toBeVisible(); await page.goto('/reader'); await expect(page.getByText('Olá, estudante!')).toBeVisible() })
