INSERT INTO members (first_name, last_name, gender, birthdate, address, address2, city, state, zip, phone, email, username, hash)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING *;