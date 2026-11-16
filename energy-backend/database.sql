CREATE DATABASE IF NOT EXISTS chageu_energy
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE chageu_energy;

CREATE TABLE IF NOT EXISTS energy_orders (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  tx_id VARCHAR(64) NOT NULL,
  from_address VARCHAR(64) NOT NULL,
  amount_trx DECIMAL(20,6) NOT NULL,
  energy_amount BIGINT UNSIGNED NOT NULL,
  batches TINYINT UNSIGNED NOT NULL,
  status ENUM('pending','delegating','success','failed','anomaly') NOT NULL DEFAULT 'pending',
  delegate_tx_id VARCHAR(64) DEFAULT NULL,
  error_message VARCHAR(255) DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uk_tx_id (tx_id),
  KEY idx_status (status),
  KEY idx_from (from_address)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS anomaly_transfers (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  tx_id VARCHAR(64) NOT NULL,
  from_address VARCHAR(64) NOT NULL,
  amount_trx DECIMAL(20,6) NOT NULL,
  reason VARCHAR(255) NOT NULL,
  resolved TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uk_anomaly_tx (tx_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
