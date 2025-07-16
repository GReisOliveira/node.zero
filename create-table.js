// create-table.js

// Verifique se o nome do seu arquivo de conexão é 'db.js'
// Se for 'sql.js', mude a linha abaixo para import { sql } from './sql.js'
import { sql } from './sql.js'

// Use a CRASE (`) aqui para abrir e fechar o bloco SQL
sql`
  CREATE TABLE videos (
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    duration    INTEGER
  );
`.then(() => {
  console.log('Tabela criada com sucesso!')
})