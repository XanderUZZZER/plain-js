CREATE TABLE Types
(
  ID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_Types PRIMARY KEY,
  Title nvarchar(30) NOT NULL
);

CREATE TABLE Locations
(
  ID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_Locations PRIMARY KEY,
  ParentID int CONSTRAINT FK_ParentID FOREIGN KEY REFERENCES Locations(ID),
  Title nvarchar(30) NOT NULL,
  TypeID int NOT NULL CONSTRAINT FK_TypeID FOREIGN KEY REFERENCES Types(ID)
);

INSERT Types
VALUES
  ('Country'),
  ('City'),
  ('Street');

INSERT Locations
VALUES
  (NULL, 'Ukraine', 1),
  (NULL, 'Russia', 1),
  (NULL, 'UK', 1),
  (1, 'Kharkiv', 2),
  (1, 'Kyiv', 2),
  (1, 'Odessa', 2),
  (2, 'Moscow', 2),
  (2, 'Omsk', 2),
  (3, 'London', 2),
  (3, 'Dublin', 2),
  (3, 'Hampshire', 2),
  (4, 'Sumska', 3),
  (4, 'Pushkinska', 3),
  (4, 'Poltavsky', 3),
  (5, 'Khreschatik', 3),
  (5, 'Lybidska', 3),
  (6, 'Derybasovaks', 3),
  (7, 'Arbat', 3),
  (7, 'Lenina', 3),
  (8, 'Marksa', 3),
  (9, 'Piccadilly', 3),
  (9, 'Brick Lane', 3),
  (9, 'Oxford', 3),
  (10, 'Dubllin str', 3),
  (11, 'HempShire str', 3);

-- Define the CTE(temporary table) name and column list
WITH
  ukraine
  AS
  -- Define the CTE query
  (
    -- Initial query
          SELECT *
      FROM Locations
      WHERE   Title = 'Ukraine'
    UNION ALL
      -- Recursive member that references expression_name
      SELECT t.*
      FROM Locations t INNER JOIN
        ukraine ukr ON t.ParentID = ukr.ID
  )
-- Define the main query
SELECT *
FROM ukraine;