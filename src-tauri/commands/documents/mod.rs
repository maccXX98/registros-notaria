use chrono::NaiveDateTime;
use rusqlite::{params, Connection, Result as SqliteResult};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Document {
    pub id: Option<i32>,
    pub client_id: i32,
    pub document_type_id: i32,
    pub title: String,
    pub status: String,
    pub delivery_datetime: Option<String>,
    pub deposit: f64,
    pub pending_amount: f64,
    pub observation: Option<String>,
    pub created_at: Option<String>,
    pub updated_at: Option<String>,
    pub deleted_at: Option<String>,
}

#[tauri::command]
pub async fn create_document(db_path: String, document: Document) -> Result<Document, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql =
        "INSERT INTO documents (client_id, document_type_id, title, status, delivery_datetime, 
               deposit, pending_amount, observation, deleted_at) 
               VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, NULL) RETURNING *";

    let mut stmt = conn.prepare(sql).map_err(|e| e.to_string())?;

    let result = stmt
        .query_row(
            params![
                document.client_id,
                document.document_type_id,
                document.title,
                document.status,
                document.delivery_datetime,
                document.deposit,
                document.pending_amount,
                document.observation,
            ],
            |row| {
                Ok(Document {
                    id: Some(row.get(0)?),
                    client_id: row.get(1)?,
                    document_type_id: row.get(2)?,
                    title: row.get(3)?,
                    status: row.get(4)?,
                    delivery_datetime: row.get(5)?,
                    deposit: row.get(6)?,
                    pending_amount: row.get(7)?,
                    observation: row.get(8)?,
                    created_at: row.get(9)?,
                    updated_at: row.get(10)?,
                })
            },
        )
        .map_err(|e| e.to_string())?;

    Ok(result)
}

#[tauri::command]
pub async fn get_document(db_path: String, id: i32) -> Result<Document, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let mut stmt = conn
        .prepare("SELECT * FROM documents WHERE id = ?1 AND deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let document = stmt
        .query_row(params![id], |row| {
            Ok(Document {
                id: Some(row.get(0)?),
                client_id: row.get(1)?,
                document_type_id: row.get(2)?,
                title: row.get(3)?,
                status: row.get(4)?,
                delivery_datetime: row.get(5)?,
                deposit: row.get(6)?,
                pending_amount: row.get(7)?,
                observation: row.get(8)?,
                created_at: row.get(9)?,
                updated_at: row.get(10)?,
            })
        })
        .map_err(|e| e.to_string())?;

    Ok(document)
}

#[tauri::command]
pub async fn get_all_documents(db_path: String) -> Result<Vec<Document>, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT * FROM documents WHERE deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let documents = stmt
        .query_map([], |row| {
            Ok(Document {
                id: Some(row.get(0)?),
                client_id: row.get(1)?,
                document_type_id: row.get(2)?,
                title: row.get(3)?,
                status: row.get(4)?,
                delivery_datetime: row.get(5)?,
                deposit: row.get(6)?,
                pending_amount: row.get(7)?,
                observation: row.get(8)?,
                created_at: row.get(9)?,
                updated_at: row.get(10)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;

    Ok(documents)
}

#[tauri::command]
pub async fn update_document(db_path: String, document: Document) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "UPDATE documents 
               SET client_id = ?1, 
                   document_type_id = ?2, 
                   title = ?3, 
                   status = ?4,
                   delivery_datetime = ?5,
                   deposit = ?6,
                   pending_amount = ?7,
                   observation = ?8,
                   updated_at = CURRENT_TIMESTAMP 
               WHERE id = ?9";

    conn.execute(
        sql,
        params![
            document.client_id,
            document.document_type_id,
            document.title,
            document.status,
            document.delivery_datetime,
            document.deposit,
            document.pending_amount,
            document.observation,
            document.id,
        ],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
pub async fn delete_document(db_path: String, id: i32) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let current_time = chrono::Local::now().naive_local().to_string();

    conn.execute(
        "UPDATE documents SET deleted_at = ?1 WHERE id = ?2 AND deleted_at IS NULL",
        params![current_time, id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}
