use std::fs;
use std::path::Path;

use diesel::prelude::*;
use diesel::sqlite::SqliteConnection;
use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};

const MIGRATIONS: EmbeddedMigrations = embed_migrations!("database/migrations");

pub fn init() {
    if !db_file_exists() {
        create_db_file();
    }

    run_migrations();

    // Verificar que la base de datos se ha creado correctamente
    if verify_db_creation() {
        println!("Base de datos creada y conectada correctamente");
    } else {
        panic!("Error al verificar la creación de la base de datos");
    }
}

pub fn establish_db_connection() -> SqliteConnection {
    let db_path = format!("sqlite://{}", get_db_path());

    SqliteConnection::establish(&db_path)
        .unwrap_or_else(|_| panic!("Error connecting to {}", db_path))
}

fn run_migrations() {
    let mut connection = establish_db_connection();
    connection
        .run_pending_migrations(MIGRATIONS)
        .unwrap_or_else(|_| panic!("Error running migrations"));
}

fn create_db_file() {
    let db_path = get_db_path();
    let db_dir = Path::new(&db_path).parent().unwrap();

    if !db_dir.exists() {
        fs::create_dir_all(db_dir).unwrap();
    }

    fs::File::create(db_path).unwrap();
}

fn db_file_exists() -> bool {
    let db_path = get_db_path();
    Path::new(&db_path).exists()
}

fn get_db_path() -> String {
    let project_dir =
        std::env::current_dir().unwrap_or_else(|_| panic!("Failed to get current directory"));
    let path = project_dir.join("database").join("registros_notaria.db");
    path.to_str().unwrap().to_string()
}

/// Verifica que la base de datos existe y se puede conectar a ella
pub fn verify_db_creation() -> bool {
    if !db_file_exists() {
        return false;
    }

    // Intentar establecer una conexión
    match SqliteConnection::establish(&format!("sqlite://{}", get_db_path())) {
        Ok(_) => true,
        Err(e) => {
            eprintln!("Error al conectar a la base de datos: {}", e);
            false
        }
    }
}
