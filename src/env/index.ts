import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev'),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(9371)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Variável Incorreta', _env.error.format())
  throw new Error('Variável Incorreta!')
}

export const env = _env.data