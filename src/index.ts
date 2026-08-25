import type { Context } from '@deepseek-ai/cordis'
import Schema from '@deepseek-ai/schemastery'

export const name = 'dsh-fitness'

export interface Config {
  defaultWeightUnit: 'kg' | 'lb'
  defaultTimezone: string
  progressionIncrementKg: number
}

export const Config: Schema<Config> = Schema.object({
  defaultWeightUnit: Schema.union(['kg', 'lb']).default('kg'),
  defaultTimezone: Schema.string().default('UTC'),
  progressionIncrementKg: Schema.number().default(2.5),
})

export function apply(ctx: Context, config: Config) {
  ctx.effect(() => {
    console.log(`[${name}] loaded (${config.defaultWeightUnit}, ${config.defaultTimezone})`)

    return () => {
      console.log(`[${name}] unloaded`)
    }
  })
}
