CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;
CREATE TABLE IF NOT EXISTS contact_message (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL
);
-- View stored messages: SELECT * FROM contact_message ORDER BY created_at DESC;
