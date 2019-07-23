INSERT INTO members (first_name, last_name, gender, dob_month, dob_year, dob_day, address, address2, city, state, zip, phone, email, username, hash, card_number, expiration_month, expiration_year, cvv, card_first_name, card_last_name)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
RETURNING *;