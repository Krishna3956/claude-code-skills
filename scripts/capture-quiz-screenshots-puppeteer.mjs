#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const PAGES = [
  'github-copilot', 'canva', 'slack', 'midjourney', 'obsidian', 'hubspot',
  'airtable', 'zapier', 'emergent', 'replit', 'bolt', 'docker', 'gemini', 'loom'
];

const OUT_DIR = join(process.cwd(), 'quiz-screenshots');
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (const slug of PAGES) {
    const url = `http://localhost:3000/play/${slug}`;
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: join(OUT_DIR, `${slug}.png`), fullPage: false });
      console.log(`✓ ${slug}`);
    } catch (e) {
      console.error(`✗ ${slug}:`, e.message);
    }
  }

  await browser.close();
  console.log('\nDone. Screenshots saved to quiz-screenshots/');
}

main().catch(console.error);
