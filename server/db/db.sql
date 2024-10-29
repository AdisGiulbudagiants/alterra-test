CREATE TABLE contacts (
    id int GENERATED ALWAYS AS IDENTITY NOT NULL,
    full_name text NOT NULL DEFAULT 'Name Surname',
    phone varchar(25) NOT NULL DEFAULT '8-800-000-01-02',
    created_at  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,


    CONSTRAINT pk_contacts_id PRIMARY KEY(id)
)


SELECT * FROM contacts;

INSERT INTO contacts (full_name, phone)
VALUES
('Adis Gb','88005553535');


DROP TABLE contacts;

TRUNCATE contacts RESTART IDENTITY;