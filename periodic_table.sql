CREATE DATABASE IF NOT EXISTS periodic_table;
USE periodic_table;

CREATE TABLE elements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(5),
    name VARCHAR(50),
    atomic_number INT,
    position_x INT,
    position_y INT
);

INSERT INTO elements (symbol, name, atomic_number, position_x, position_y) VALUES
('H', 'Hydrogen', 1, 1, 1),
('He', 'Helium', 2, 18, 1),
('Li', 'Lithium', 3, 1, 2),
('Be', 'Beryllium', 4, 2, 2),
('B', 'Boron', 5, 13, 2),
('C', 'Carbon', 6, 14, 2),
('N', 'Nitrogen', 7, 15, 2),
('O', 'Oxygen', 8, 16, 2),
('F', 'Fluorine', 9, 17, 2),
('Ne', 'Neon', 10, 18, 2),
('Na', 'Sodium', 11, 1, 3),
('Mg', 'Magnesium', 12, 2, 3);


INSERT INTO elements (symbol, name, atomic_number, position_x, position_y) VALUES
('Al', 'Aluminium', 13, 13, 3),
('Si', 'Silicon', 14, 14, 3),
('P', 'Phosphorus', 15, 15, 3),
('S', 'Sulfur', 16, 16, 3),
('Cl', 'Chlorine', 17, 17, 3),
('Ar', 'Argon', 18, 18, 3),
('K', 'Potassium', 19, 1, 4),
('Ca', 'Calcium', 20, 2, 4),
('Sc', 'Scandium', 21, 3, 4),
('Ti', 'Titanium', 22, 4, 4),
('V', 'Vanadium', 23, 5, 4),
('Cr', 'Chromium', 24, 6, 4),
('Mn', 'Manganese', 25, 7, 4),
('Fe', 'Iron', 26, 8, 4),
('Co', 'Cobalt', 27, 9, 4),
('Ni', 'Nickel', 28, 10, 4),
('Cu', 'Copper', 29, 11, 4),
('Zn', 'Zinc', 30, 12, 4),
('Ga', 'Gallium', 31, 13, 4),
('Ge', 'Germanium', 32, 14, 4),
('As', 'Arsenic', 33, 15, 4),
('Se', 'Selenium', 34, 16, 4),
('Br', 'Bromine', 35, 17, 4),
('Kr', 'Krypton', 36, 18, 4),
('Rb', 'Rubidium', 37, 1, 5),
('Sr', 'Strontium', 38, 2, 5),
('Y', 'Yttrium', 39, 3, 5),
('Zr', 'Zirconium', 40, 4, 5),
('Nb', 'Niobium', 41, 5, 5),
('Mo', 'Molybdenum', 42, 6, 5),
('Tc', 'Technetium', 43, 7, 5),
('Ru', 'Ruthenium', 44, 8, 5),
('Rh', 'Rhodium', 45, 9, 5),
('Pd', 'Palladium', 46, 10, 5),
('Ag', 'Silver', 47, 11, 5),
('Cd', 'Cadmium', 48, 12, 5),
('In', 'Indium', 49, 13, 5),
('Sn', 'Tin', 50, 14, 5),
('Sb', 'Antimony', 51, 15, 5),
('Te', 'Tellurium', 52, 16, 5),
('I', 'Iodine', 53, 17, 5),
('Xe', 'Xenon', 54, 18, 5),
('Cs', 'Cesium', 55, 1, 6),
('Ba', 'Barium', 56, 2, 6),
('La', 'Lanthanum', 57, 4, 9),
('Ce', 'Cerium', 58, 5, 9),
('Pr', 'Praseodymium', 59, 6, 9),
('Nd', 'Neodymium', 60, 7, 9),
('Pm', 'Promethium', 61, 8, 9),
('Sm', 'Samarium', 62, 9, 9),
('Eu', 'Europium', 63, 10, 9),
('Gd', 'Gadolinium', 64, 11, 9),
('Tb', 'Terbium', 65, 12, 9),
('Dy', 'Dysprosium', 66, 13, 9),
('Ho', 'Holmium', 67, 14, 9),
('Er', 'Erbium', 68, 15, 9),
('Tm', 'Thulium', 69, 16, 9),
('Yb', 'Ytterbium', 70, 17, 9),
('Lu', 'Lutetium', 71, 18, 9),
('Hf', 'Hafnium', 72, 4, 6),
('Ta', 'Tantalum', 73, 5, 6),
('W', 'Tungsten', 74, 6, 6),
('Re', 'Rhenium', 75, 7, 6),
('Os', 'Osmium', 76, 8, 6),
('Ir', 'Iridium', 77, 9, 6),
('Pt', 'Platinum', 78, 10, 6),
('Au', 'Gold', 79, 11, 6),
('Hg', 'Mercury', 80, 12, 6),
('Tl', 'Thallium', 81, 13, 6),
('Pb', 'Lead', 82, 14, 6),
('Bi', 'Bismuth', 83, 15, 6),
('Po', 'Polonium', 84, 16, 6),
('At', 'Astatine', 85, 17, 6),
('Rn', 'Radon', 86, 18, 6),
('Fr', 'Francium', 87, 1, 7),
('Ra', 'Radium', 88, 2, 7),
('Ac', 'Actinium', 89, 4, 10),
('Th', 'Thorium', 90, 5, 10),
('Pa', 'Protactinium', 91, 6, 10),
('U', 'Uranium', 92, 7, 10),
('Np', 'Neptunium', 93, 8, 10),
('Pu', 'Plutonium', 94, 9, 10),
('Am', 'Americium', 95, 10, 10),
('Cm', 'Curium', 96, 11, 10),
('Bk', 'Berkelium', 97, 12, 10),
('Cf', 'Californium', 98, 13, 10),
('Es', 'Einsteinium', 99, 14, 10),
('Fm', 'Fermium', 100, 15, 10),
('Md', 'Mendelevium', 101, 16, 10),
('No', 'Nobelium', 102, 17, 10),
('Lr', 'Lawrencium', 103, 18, 10),
('Rf', 'Rutherfordium', 104, 4, 7),
('Db', 'Dubnium', 105, 5, 7),
('Sg', 'Seaborgium', 106, 6, 7),
('Bh', 'Bohrium', 107, 7, 7),
('Hs', 'Hassium', 108, 8, 7),
('Mt', 'Meitnerium', 109, 9, 7),
('Ds', 'Darmstadtium', 110, 10, 7),
('Rg', 'Roentgenium', 111, 11, 7),
('Cn', 'Copernicium', 112, 12, 7),
('Nh', 'Nihonium', 113, 13, 7),
('Fl', 'Flerovium', 114, 14, 7),
('Mc', 'Moscovium', 115, 15, 7),
('Lv', 'Livermorium', 116, 16, 7),
('Ts', 'Tennessine', 117, 17, 7),
('Og', 'Oganesson', 118, 18, 7);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Yug&daksh2023';
FLUSH PRIVILEGES;
ALTER TABLE elements 
ADD COLUMN category ENUM(
    'alkali metal', 'alkaline earth metal', 'transition metal', 
    'post-transition metal', 'metalloid', 'nonmetal', 'noble gas', 
    'lanthanide', 'actinide', 'unknown'
) DEFAULT 'unknown';
SET SQL_SAFE_UPDATES = 0;

UPDATE elements SET category = 'alkali metal' WHERE atomic_number IN (3, 11, 19, 37, 55, 87);
UPDATE elements SET category = 'alkaline earth metal' WHERE atomic_number IN (4, 12, 20, 38, 56, 88);
UPDATE elements SET category = 'transition metal' WHERE atomic_number BETWEEN 21 AND 30 
   OR atomic_number BETWEEN 39 AND 48 
   OR atomic_number BETWEEN 72 AND 80 
   OR atomic_number BETWEEN 104 AND 112;
UPDATE elements SET category = 'post-transition metal' WHERE atomic_number IN (13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116);
UPDATE elements SET category = 'metalloid' WHERE atomic_number IN (5, 14, 32, 33, 51, 52, 84);
UPDATE elements SET category = 'nonmetal' WHERE atomic_number IN (1, 6, 7, 8, 15, 16, 34);
UPDATE elements SET category = 'noble gas' WHERE atomic_number IN (2, 10, 18, 36, 54, 86, 118);
UPDATE elements SET category = 'lanthanide' WHERE atomic_number BETWEEN 57 AND 71;
UPDATE elements SET category = 'actinide' WHERE atomic_number BETWEEN 89 AND 103;
UPDATE elements SET category = 'halogen' WHERE atomic_number IN (2, 10, 18, 36, 54, 86, 118);
SET SQL_SAFE_UPDATES = 1;

ALTER TABLE elements 
MODIFY COLUMN category ENUM(
    'alkali metal', 'alkaline earth metal', 'transition metal', 
    'post-transition metal', 'metalloid', 'nonmetal', 'noble gas', 
    'lanthanide', 'actinide', 'halogen', 'unknown'
) DEFAULT 'unknown';

UPDATE elements SET category = 'halogen' WHERE atomic_number IN (9, 17, 35, 53, 85, 117);

ALTER TABLE elements
MODIFY COLUMN category ENUM(
    'alkali metal', 'Earth Metal', 'T-metal', 
    'PT-metal', 'metalloid', 'nonmetal', 'noble gas', 
    'lanthanide', 'actinide', 'halogen', 'unknown'
) DEFAULT 'unknown';

UPDATE elements SET category = 'unknown';

SET SQL_SAFE_UPDATES = 0;

UPDATE elements SET category = 'alkali metal' WHERE atomic_number IN (3, 11, 19, 37, 55, 87);
UPDATE elements SET category = 'Earth Metal' WHERE atomic_number IN (4, 12, 20, 38, 56, 88);
UPDATE elements SET category = 'T-metal' WHERE atomic_number BETWEEN 21 AND 30 
   OR atomic_number BETWEEN 39 AND 48 
   OR atomic_number BETWEEN 72 AND 80 
   OR atomic_number BETWEEN 104 AND 112;
UPDATE elements SET category = 'PT-metal' WHERE atomic_number IN (13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116);
UPDATE elements SET category = 'metalloid' WHERE atomic_number IN (5, 14, 32, 33, 51, 52, 84);
UPDATE elements SET category = 'nonmetal' WHERE atomic_number IN (1, 6, 7, 8, 15, 16, 34);
UPDATE elements SET category = 'noble gas' WHERE atomic_number IN (2, 10, 18, 36, 54, 86, 118);
UPDATE elements SET category = 'lanthanide' WHERE atomic_number BETWEEN 57 AND 71;
UPDATE elements SET category = 'actinide' WHERE atomic_number BETWEEN 89 AND 103;
UPDATE elements SET category = 'halogen' WHERE atomic_number IN (2, 10, 18, 36, 54, 86, 118);

SET SQL_SAFE_UPDATES = 1;