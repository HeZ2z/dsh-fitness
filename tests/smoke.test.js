import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const root = new URL('../', import.meta.url)

test('bundle manifest declares the Cordis patch', async () => {
  const packageJson = JSON.parse(
    await readFile(new URL('package.json', root), 'utf8'),
  )

  assert.equal(packageJson.dsh.bundle.patch, './cordis.patch.yml')
  assert.equal(packageJson.type, 'module')
  assert.equal(packageJson.main, './lib/index.js')
})

test('Cordis patch inserts the package by name', async () => {
  const patch = await readFile(new URL('cordis.patch.yml', root), 'utf8')

  assert.match(patch, /id: dsh-fitness/)
  assert.match(patch, /name: dsh-fitness/)
})
