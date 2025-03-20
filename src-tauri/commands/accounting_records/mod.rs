use chrono::NaiveDateTime;
use rusqlite::{params, Connection, Result as SqliteResult};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct AccountingRecord {
    pub id: Option<i32>,
    pub payment_id: i32,
    pub description: String,
    pub amount: f64,
    pub record_type: String,
    pub record_date: String,
    pub created_at: Option<String>,
    pub deleted_at: Option<String>,
}

#[tauri::command]
pub async fn create_accounting_record(
    db_path: String,
    record: AccountingRecord,
) -> Result<AccountingRecord, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "INSERT INTO accounting_records (payment_id, description, amount, record_type, record_date, deleted_at) 
               VALUES (?1, ?2, ?3, ?4, ?5, NULL) RETURNING *";

    let mut stmt = conn.prepare(sql).map_err(|e| e.to_string())?;

    let result = stmt
        .query_row(
            params![
                record.payment_id,
                record.description,
                record.amount,
                record.record_type,
                record.record_date,
            ],
            |row| {
                Ok(AccountingRecord {
                    id: Some(row.get(0)?),
                    payment_id: row.get(1)?,
                    description: row.get(2)?,
                    amount: row.get(3)?,
                    record_type: row.get(4)?,
                    record_date: row.get(5)?,
                    created_at: row.get(6)?,
                })
            },
        )
        .map_err(|e| e.to_string())?;

    Ok(result)
}

#[tauri::command]
pub async fn get_accounting_record(db_path: String, id: i32) -> Result<AccountingRecord, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let mut stmt = conn
        .prepare("SELECT * FROM accounting_records WHERE id = ?1 AND deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let record = stmt
        .query_row(params![id], |row| {
            Ok(AccountingRecord {
                id: Some(row.get(0)?),
                payment_id: row.get(1)?,
                description: row.get(2)?,
                amount: row.get(3)?,
                record_type: row.get(4)?,
                record_date: row.get(5)?,
                created_at: row.get(6)?,
            })
        })
        .map_err(|e| e.to_string())?;

    Ok(record)
}

#[tauri::command]
pub async fn get_all_accounting_records(db_path: String) -> Result<Vec<AccountingRecord>, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT * FROM accounting_records WHERE deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let records = stmt
        .query_map([], |row| {
            Ok(AccountingRecord {
                id: Some(row.get(0)?),
                payment_id: row.get(1)?,
                description: row.get(2)?,
                amount: row.get(3)?,
                record_type: row.get(4)?,
                record_date: row.get(5)?,
                created_at: row.get(6)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;

    Ok(records)
}

#[tauri::command]
pub async fn get_payment_accounting_records(
    db_path: String,
    payment_id: i32,
) -> Result<Vec<AccountingRecord>, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT * FROM accounting_records WHERE payment_id = ?1 AND deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let records = stmt
        .query_map(params![payment_id], |row| {
            Ok(AccountingRecord {
                id: Some(row.get(0)?),
                payment_id: row.get(1)?,
                description: row.get(2)?,
                amount: row.get(3)?,
                record_type: row.get(4)?,
                record_date: row.get(5)?,
                created_at: row.get(6)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;

    Ok(records)
}

#[tauri::command]
pub async fn update_accounting_record(
    db_path: String,
    record: AccountingRecord,
) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "UPDATE accounting_records 
               SET payment_id = ?1, 
                   description = ?2, 
                   amount = ?3, 
                   record_type = ?4,
                   record_date = ?5
               WHERE id = ?6";

    conn.execute(
        sql,
        params![
            record.payment_id,
            record.description,
            record.amount,
            record.record_type,
            record.record_date,
            record.id,
        ],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
pub async fn delete_accounting_record(db_path: String, id: i32) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let current_time = chrono::Local::now().naive_local().to_string();

    conn.execute(
        "UPDATE accounting_records SET deleted_at = ?1 WHERE id = ?2 AND deleted_at IS NULL",
        params![current_time, id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}
