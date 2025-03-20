use chrono::NaiveDateTime;
use rusqlite::{params, Connection, Result as SqliteResult};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Client {
    pub id: Option<i32>,
    pub name: String,
    pub identity_document: Option<String>,
    pub phone: Option<String>,
    pub observation: Option<String>,
    pub created_at: Option<String>,
    pub updated_at: Option<String>,
    pub deleted_at: Option<String>,
}

#[tauri::command]
pub async fn create_client(db_path: String, client: Client) -> Result<Client, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "INSERT INTO clients (name, identity_document, phone, observation, deleted_at) 
               VALUES (?1, ?2, ?3, ?4, NULL) RETURNING *";

    let mut stmt = conn.prepare(sql).map_err(|e| e.to_string())?;

    let result = stmt
        .query_row(
            params![
                client.name,
                client.identity_document,
                client.phone,
                client.observation,
            ],
            |row| {
                Ok(Client {
                    id: Some(row.get(0)?),
                    name: row.get(1)?,
                    identity_document: row.get(2)?,
                    phone: row.get(3)?,
                    observation: row.get(4)?,
                    created_at: row.get(5)?,
                    updated_at: row.get(6)?,
                })
            },
        )
        .map_err(|e| e.to_string())?;

    Ok(result)
}

#[tauri::command]
pub async fn get_client(db_path: String, id: i32) -> Result<Client, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let mut stmt = conn
        .prepare("SELECT * FROM clients WHERE id = ?1 AND deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let client = stmt
        .query_row(params![id], |row| {
            Ok(Client {
                id: Some(row.get(0)?),
                name: row.get(1)?,
                identity_document: row.get(2)?,
                phone: row.get(3)?,
                observation: row.get(4)?,
                created_at: row.get(5)?,
                updated_at: row.get(6)?,
            })
        })
        .map_err(|e| e.to_string())?;

    Ok(client)
}

#[tauri::command]
pub async fn get_all_clients(db_path: String) -> Result<Vec<Client>, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT * FROM clients WHERE deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let clients = stmt
        .query_map([], |row| {
            Ok(Client {
                id: Some(row.get(0)?),
                name: row.get(1)?,
                identity_document: row.get(2)?,
                phone: row.get(3)?,
                observation: row.get(4)?,
                created_at: row.get(5)?,
                updated_at: row.get(6)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;

    Ok(clients)
}

#[tauri::command]
pub async fn update_client(db_path: String, client: Client) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "UPDATE clients 
               SET name = ?1, 
                   identity_document = ?2, 
                   phone = ?3, 
                   observation = ?4,
                   updated_at = CURRENT_TIMESTAMP 
               WHERE id = ?5";

    conn.execute(
        sql,
        params![
            client.name,
            client.identity_document,
            client.phone,
            client.observation,
            client.id,
        ],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
pub async fn delete_client(db_path: String, id: i32) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let current_time = chrono::Local::now().naive_local().to_string();

    conn.execute(
        "UPDATE clients SET deleted_at = ?1 WHERE id = ?2 AND deleted_at IS NULL",
        params![current_time, id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}
