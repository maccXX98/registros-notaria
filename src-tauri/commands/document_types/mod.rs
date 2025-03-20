use chrono::NaiveDateTime;
use rusqlite::{params, Connection, Result as SqliteResult};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct DocumentType {
    pub id: Option<i32>,
    pub name: String,
    pub cost: f64,
    pub subtype: Option<String>,
    pub created_at: Option<String>,
    pub updated_at: Option<String>,
    pub deleted_at: Option<String>,
}

#[tauri::command]
pub async fn create_document_type(
    db_path: String,
    document_type: DocumentType,
) -> Result<DocumentType, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "INSERT INTO document_types (name, cost, subtype, deleted_at) 
               VALUES (?1, ?2, ?3, NULL) RETURNING *";

    let mut stmt = conn.prepare(sql).map_err(|e| e.to_string())?;

    let result = stmt
        .query_row(
            params![
                document_type.name,
                document_type.cost,
                document_type.subtype,
            ],
            |row| {
                Ok(DocumentType {
                    id: Some(row.get(0)?),
                    name: row.get(1)?,
                    cost: row.get(2)?,
                    subtype: row.get(3)?,
                    created_at: row.get(4)?,
                    updated_at: row.get(5)?,
                })
            },
        )
        .map_err(|e| e.to_string())?;

    Ok(result)
}

#[tauri::command]
pub async fn get_document_type(db_path: String, id: i32) -> Result<DocumentType, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let mut stmt = conn
        .prepare("SELECT * FROM document_types WHERE id = ?1 AND deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let document_type = stmt
        .query_row(params![id], |row| {
            Ok(DocumentType {
                id: Some(row.get(0)?),
                name: row.get(1)?,
                cost: row.get(2)?,
                subtype: row.get(3)?,
                created_at: row.get(4)?,
                updated_at: row.get(5)?,
            })
        })
        .map_err(|e| e.to_string())?;

    Ok(document_type)
}

#[tauri::command]
pub async fn get_all_document_types(db_path: String) -> Result<Vec<DocumentType>, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT * FROM document_types WHERE deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let document_types = stmt
        .query_map([], |row| {
            Ok(DocumentType {
                id: Some(row.get(0)?),
                name: row.get(1)?,
                cost: row.get(2)?,
                subtype: row.get(3)?,
                created_at: row.get(4)?,
                updated_at: row.get(5)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;

    Ok(document_types)
}

#[tauri::command]
pub async fn update_document_type(
    db_path: String,
    document_type: DocumentType,
) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "UPDATE document_types 
               SET name = ?1, 
                   cost = ?2, 
                   subtype = ?3,
                   updated_at = CURRENT_TIMESTAMP 
               WHERE id = ?4";

    conn.execute(
        sql,
        params![
            document_type.name,
            document_type.cost,
            document_type.subtype,
            document_type.id,
        ],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
pub async fn delete_document_type(db_path: String, id: i32) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let current_time = chrono::Local::now().naive_local().to_string();

    conn.execute(
        "UPDATE document_types SET deleted_at = ?1 WHERE id = ?2 AND deleted_at IS NULL",
        params![current_time, id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}
