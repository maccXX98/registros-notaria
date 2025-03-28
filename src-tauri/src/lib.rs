mod db;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![])
        .setup(|_app| {
            // Initialize the database.
            db::init();
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
