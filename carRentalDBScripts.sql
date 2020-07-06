/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [ID]
      ,[UserId]
      ,[LastName]
      ,[FirstName]
      ,[Username]
      ,[UserPassword]
      ,[Gender]
      ,[Email]
      ,[DayOfBirth]
  FROM [CarRentalDB].[dbo].[Users]


CREATE TABLE Users (
    ID int IDENTITY(100,1) PRIMARY KEY,
	UserId varchar(20) NOT NULL,
    FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
    Username varchar(30) NOT NULL,
    HashPassword varchar(64) NOT NULL,
    Gender char(2),
    Email varchar(255) NOT NULL,
	DayOfBirth datetime,
	Title varchar(20) DEFAULT('User')
);


insert into Users(UserId, LastName, FirstName, Username, HashPassword, Email)
values(1111, 'Shar', 'Edo', 'EdoS', 'fsaf234', 'edosh@gmail.com')

--ALTER TABLE Users
--ADD Title varchar(20) 

--ALTER TABLE Users 
--ALTER COLUMN Title varchar(20) NOT NULL set DEFAULT('User');