#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const raw = match[1];
  const fields = {};
  let currentKey = null;
  let inArray = false;

  for (const line of raw.split('\n')) {
    const arrayItem = line.match(/^\s+-\s+(.+)/);
    if (inArray && arrayItem) {
      fields[currentKey].push(arrayItem[1].trim());
      continue;
    }

    const kvMatch = line.match(/^([a-zA-Z_-]+):\s*(.*)/);
    if (kvMatch) {
      currentKey = kvMatch[1];
      const value = kvMatch[2].trim();
      if (value === '') {
        fields[currentKey] = [];
        inArray = true;
      } else {
        fields[currentKey] = value;
        inArray = false;
      }
    }
  }

  return fields;
}

// Find the personalities directory relative to this script
const personalitiesDir = path.join(__dirname, '..', 'personalities');

const files = fs.readdirSync(personalitiesDir).filter(f => f.endsWith('.md')).sort();

const personalities = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(personalitiesDir, file), 'utf8');
  const frontmatter = parseFrontmatter(content);
  if (!frontmatter || !frontmatter.name) continue;

  personalities.push({
    file,
    name: frontmatter.name,
    tag: frontmatter.tag || '',
    description: frontmatter.description || '',
    universe: frontmatter.universe || 'Unknown',
    categories: Array.isArray(frontmatter.categories) ? frontmatter.categories : [],
  });
}

console.log(JSON.stringify(personalities, null, 2));
