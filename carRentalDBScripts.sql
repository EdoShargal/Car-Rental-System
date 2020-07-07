CREATE TABLE VehicleTypes(
	VehicleTypeID int IDENTITY(1,1) PRIMARY KEY,
	Manufacturer varchar(30) NOT NULL,
	Model varchar(20) NOT NULL,
	DailyCost money NOT NULL,
	DayLateCost money not null,
	VehicleYear int not null,
	IsMenual bit not null,
)

Create Table Vehicles(
	VehicleID int IDENTITY(1000,1) PRIMARY KEY,
	Mileage int not null,
	isRentable bit not null,
	isFix bit not null,
	SerialNumber varchar(20) not null,

	VehicleTypeID int FOREIGN KEY REFERENCES VehicleTypes(VehicleTypeID)	ON DELETE CASCADE
)

CREATE TABLE Users (
    UserID int IDENTITY(100,1) PRIMARY KEY,
	UserNumber varchar(20) NOT NULL,
    FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
    Username varchar(30) NOT NULL,
    HashPassword varchar(64) NOT NULL,
    Gender char(2),
    Email varchar(255) NOT NULL,
	DayOfBirth datetime,
	Title varchar(20) DEFAULT('User')
);

Create Table Orders (
	ID int IDENTITY(1000,1) PRIMARY KEY,
	StartDate datetime,
	EndDate datetime,
	ReturnDate datetime,
	VehicleID int,
	UserID int,

	CONSTRAINT fk_VehicleID FOREIGN KEY (VehicleID) REFERENCES Vehicles ON DELETE CASCADE,
	CONSTRAINT fk_UserID FOREIGN KEY (UserID) REFERENCES Users ON DELETE CASCADE
);

--select * from Orders
--select * from Users
--select * from Vehicles
--select * from VehicleTypes

insert into Users(UserNumber, LastName, FirstName, Username, HashPassword, Email)
values('1111', 'Shar', 'Edo', 'EdoS', 'fsaf234', 'edosh@gmail.com')

insert into VehicleTypes(Manufacturer, Model, DailyCost, DayLateCost, VehicleYear, IsMenual)
values('BMW', 'S7', 1000, 100, 2017, 0);

insert into Vehicles(Mileage, isRentable, isFix, SerialNumber, VehicleTypeID)
values(100000, 1, 1, 'GoBo-346', 1)

insert into Orders(StartDate, EndDate, ReturnDate, UserID, VehicleID)
values('09/22/1985', '09/22/1985', '09/22/1985', 100, 1000)



--ALTER TABLE Users
--ADD Title varchar(20) 

--ALTER TABLE Users 
--ALTER COLUMN Title varchar(20) NOT NULL set DEFAULT('User');