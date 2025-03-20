use chrono::NaiveDateTime;
use rusqlite::{params, Connection, Result as SqliteResult};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Payment {
    pub id: Option<i32>,
    pub document_id: i32,
    pub amount: f64,
    pub payment_date: String,
    pub payment_method: String,
    pub status: String,
    pub created_at: Option<String>,
    pub deleted_at: Option<String>,
}

#[tauri::command]
pub async fn create_payment(db_path: String, payment: Payment) -> Result<Payment, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "INSERT INTO payments (document_id, amount, payment_date, payment_method, status, deleted_at) 
               VALUES (?1, ?2, ?3, ?4, ?5, NULL) RETURNING *";

    let mut stmt = conn.prepare(sql).map_err(|e| e.to_string())?;

    let result = stmt
        .query_row(
            params![
                payment.document_id,
                payment.amount,
                payment.payment_date,
                payment.payment_method,
                payment.status,
            ],
            |row| {
                Ok(Payment {
                    id: Some(row.get(0)?),
                    document_id: row.get(1)?,
                    amount: row.get(2)?,
                    payment_date: row.get(3)?,
                    payment_method: row.get(4)?,
                    status: row.get(5)?,
                    created_at: row.get(6)?,
                })
            },
        )
        .map_err(|e| e.to_string())?;

    Ok(result)
}

#[tauri::command]
pub async fn get_payment(db_path: String, id: i32) -> Result<Payment, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let mut stmt = conn
        .prepare("SELECT * FROM payments WHERE id = ?1 AND deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let payment = stmt
        .query_row(params![id], |row| {
            Ok(Payment {
                id: Some(row.get(0)?),
                document_id: row.get(1)?,
                amount: row.get(2)?,
                payment_date: row.get(3)?,
                payment_method: row.get(4)?,
                status: row.get(5)?,
                created_at: row.get(6)?,
            })
        })
        .map_err(|e| e.to_string())?;

    Ok(payment)
}

#[tauri::command]
pub async fn get_all_payments(db_path: String) -> Result<Vec<Payment>, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT * FROM payments WHERE deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let payments = stmt
        .query_map([], |row| {
            Ok(Payment {
                id: Some(row.get(0)?),
                document_id: row.get(1)?,
                amount: row.get(2)?,
                payment_date: row.get(3)?,
                payment_method: row.get(4)?,
                status: row.get(5)?,
                created_at: row.get(6)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;

    Ok(payments)
}

#[tauri::command]
pub async fn get_document_payments(
    db_path: String,
    document_id: i32,
) -> Result<Vec<Payment>, String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT * FROM payments WHERE document_id = ?1 AND deleted_at IS NULL")
        .map_err(|e| e.to_string())?;

    let payments = stmt
        .query_map(params![document_id], |row| {
            Ok(Payment {
                id: Some(row.get(0)?),
                document_id: row.get(1)?,
                amount: row.get(2)?,
                payment_date: row.get(3)?,
                payment_method: row.get(4)?,
                status: row.get(5)?,
                created_at: row.get(6)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;

    Ok(payments)
}

#[tauri::command]
pub async fn update_payment(db_path: String, payment: Payment) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;

    let sql = "UPDATE payments 
               SET document_id = ?1, 
                   amount = ?2, 
                   payment_date = ?3, 
                   payment_method = ?4,
                   status = ?5
               WHERE id = ?6";

    conn.execute(
        sql,
        params![
            payment.document_id,
            payment.amount,
            payment.payment_date,
            payment.payment_method,
            payment.status,
            payment.id,
        ],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
pub async fn delete_payment(db_path: String, id: i32) -> Result<(), String> {
    let conn = Connection::open(&db_path).map_err(|e| e.to_string())?;
    let current_time = chrono::Local::now().naive_local().to_string();

    conn.execute(
        "UPDATE payments SET deleted_at = ?1 WHERE id = ?2 AND deleted_at IS NULL",
        params![current_time, id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}
