SELECT * FROM members
JOIN travel
ON travel.member_id = members.id
WHERE members.id = $1