-- Tabla de clientes
CREATE TABLE clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    identity_document TEXT,
    phone TEXT,
    observation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
);

-- Tabla de tipos de documento
CREATE TABLE document_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    cost DECIMAL(10, 2) NOT NULL,
    subtype TEXT, -- puede ser una clasificación
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
);

-- Tabla de documentos
CREATE TABLE documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER NOT NULL,
    document_type_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    status TEXT NOT NULL, -- Ej: 'pendiente', 'completado'
    delivery_datetime TIMESTAMP, -- fecha y hora de entrega del documento
    deposit DECIMAL(10, 2) DEFAULT 0, -- adelanto recibido
    pending_amount DECIMAL(10, 2) DEFAULT 0, -- monto pendiente de pago
    observation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (id),
    FOREIGN KEY (document_type_id) REFERENCES document_types (id)
);

-- Tabla de pagos
CREATE TABLE payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    document_id INTEGER NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP NOT NULL,
    payment_method TEXT NOT NULL,
    status TEXT NOT NULL, -- Ej: 'realizado', 'cancelado'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (document_id) REFERENCES documents (id)
);

-- Tabla de registros contables
CREATE TABLE accounting_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    payment_id INTEGER NOT NULL,
    description TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    record_type TEXT NOT NULL, -- Ej: 'ingreso' o 'egreso'
    record_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (payment_id) REFERENCES payments (id)
);