# Anteckningar

Starta MySQL
```sql
sudo service mysql restart
```

```sql
sudo mysql -u root
```

Skapa användare
```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
```

```sql
use <database>;
```

```sql
show tables;
```

```sql
SELECT * from user;
```

```sql
CREATE DATABASE <name>;
```

```sql
CREATE TABLE users (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id)) ENGINE = innodb CHARACTER SET 'utf8mb4';
```

```sql
ALTER TABLE users add name VARCHAR (140) NOT NULL;
```