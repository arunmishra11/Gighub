CREATE TABLE gig (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    technologies VARCHAR(255),
    description TEXT NOT NULL,
    budget VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL
);