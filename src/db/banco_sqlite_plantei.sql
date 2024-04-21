BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "artigos" (
	"id"	INTEGER NOT NULL,
	"titulo"	TEXT NOT NULL,
	"conteudo"	TEXT NOT NULL,
	"imagem"	BLOB NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "usuarios" (
	"id"	INTEGER NOT NULL,
	"nome"	TEXT NOT NULL,
	"email"	TEXT NOT NULL,
	"senha"	TEXT NOT NULL,
	"imagem"	BLOB NOT NULL,
	"horario_notificacao"	TEXT NOT NULL,
	"status_notificacao"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "plantas" (
	"id"	INTEGER NOT NULL,
	"nome"	TEXT NOT NULL,
	"descricao"	TEXT,
	"id_categoria"	INTEGER NOT NULL,
	"id_usuario"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("id_usuario") REFERENCES "usuarios"("id"),
	FOREIGN KEY("id_categoria") REFERENCES "categorias"("id")
);
CREATE TABLE IF NOT EXISTS "categorias" (
	"id"	INTEGER NOT NULL,
	"nome"	TEXT NOT NULL,
	"imagem"	BLOB NOT NULL,
	"frequencia_rega"	INTEGER NOT NULL,
	"frequencia_fertilizacao"	INTEGER NOT NULL,
	"frequencia_troca_vaso"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "tarefas" (
	"id"	INTEGER NOT NULL,
	"tipo"	TEXT NOT NULL,
	"status"	TEXT NOT NULL,
	"data"	TEXT NOT NULL,
	"id_planta"	INTEGER NOT NULL,
	"id_usuario"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("id_planta") REFERENCES "plantas"("id"),
	FOREIGN KEY("id_usuario") REFERENCES "usuarios"("id")
);
CREATE TABLE IF NOT EXISTS "plantas_frequencias" (
	"id"	INTEGER NOT NULL,
	"frequencia_rega"	INTEGER NOT NULL,
	"frequencia_fertilizacao"	INTEGER NOT NULL,
	"frequencia_troca_vaso"	INTEGER NOT NULL,
	"id_planta"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("id_planta") REFERENCES "plantas"("id")
);
COMMIT;