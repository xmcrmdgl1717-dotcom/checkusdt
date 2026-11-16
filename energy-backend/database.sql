CREATE TABLE energy_orders (
  id BIGSERIAL PRIMARY KEY,
  tx_id VARCHAR(64) NOT NULL UNIQUE,
  from_address VARCHAR(64) NOT NULL,
  amount_trx NUMERIC(20,6) NOT NULL,
  energy_amount BIGINT NOT NULL,
  batches SMALLINT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  delegate_tx_id VARCHAR(64),
  error_message VARCHAR(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE anomaly_transfers (
  id BIGSERIAL PRIMARY KEY,
  tx_id VARCHAR(64) NOT NULL UNIQUE,
  from_address VARCHAR(64) NOT NULL,
  amount_trx NUMERIC(20,6) NOT NULL,
  reason VARCHAR(255) NOT NULL,
  resolved SMALLINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
