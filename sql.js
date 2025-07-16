// sql.js

// Importa a biblioteca para carregar as variáveis de ambiente
import 'dotenv/config'

// Importa a biblioteca do PostgreSQL (APENAS UMA VEZ, DESTA FORMA)
import postgres from 'postgres'

// Pega as variáveis de ambiente que você configurou no .env
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env

// Monta a URL de conexão
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`

// Cria a conexão e a EXPORTA para ser usada em outros arquivos
export const sql = postgres(URL, { ssl: 'require' })