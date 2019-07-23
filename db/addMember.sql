INSERT INTO members (first_name, last_name, gender, DOBmonth, DOByear, DOBday, address, address2, city, state, zip, phone, email, username, hash, cardNumber, expirationMonth, expirationYear, CVV, cardFirstName, cardLastName)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
RETURNING *;