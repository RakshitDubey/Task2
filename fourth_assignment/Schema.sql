-- Create the Customers table
CREATE TABLE Customers (
    CustomerID SERIAL PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Phone VARCHAR(20),
    Address VARCHAR(255)
);

-- Create the Orders table
CREATE TABLE Orders (
    OrderID SERIAL PRIMARY KEY,
    CustomerID INT NOT NULL,
    OrderDate DATE NOT NULL,
    TotalAmount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE
);



-- Insert a new customer
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address)
VALUES ('John', 'Doe', 'john@example.com', '123-456-7890', '123 Main St');

-- Insert a new order for a customer
INSERT INTO Orders (CustomerID, OrderDate, TotalAmount)
VALUES (1, '2024-04-30', 100.50);


-- Select all customers
SELECT * FROM Customers;

-- Select a specific customer by ID
SELECT * FROM Customers WHERE CustomerID = 1;

-- Select all orders for a specific customer
SELECT * FROM Orders WHERE CustomerID = 1;

-- Update customer information
UPDATE Customers
SET FirstName = 'Jane', LastName = 'Doe', Phone = '987-654-3210'
WHERE CustomerID = 1;

-- Update order information
UPDATE Orders
SET TotalAmount = 150.75
WHERE OrderID = 1;


-- Delete a customer
DELETE FROM Customers WHERE CustomerID = 1;

-- Delete an order
DELETE FROM Orders WHERE OrderID = 1;




