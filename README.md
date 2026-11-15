# Achal Shukla | Personal Portfolio

A personal portfolio website showcasing my skills, projects, internships, certifications, and professional journey as a Computer Science Engineering student.

Built using **Java, Spring Boot, MySQL, HTML, CSS, and JavaScript**.

## Overview

This portfolio provides an interactive platform to explore my technical skills, projects, experience, and achievements. It also includes a contact form that allows visitors to send messages, which are stored in a MySQL database.

## Features

- Modern and responsive portfolio design
- Dark mode and light mode toggle
- Animated UI elements and smooth scrolling
- About Me section
- Technical Skills section
- Projects showcase
- Internship experience
- Certifications section
- Downloadable resume
- Contact form with input validation
- Contact messages stored in MySQL database
- Dedicated GitHub, LinkedIn, and email links

## Tech Stack

| Technology | Purpose |
|---|---|
| Java 17 | Backend programming |
| Spring Boot | Backend framework |
| Maven | Dependency management and build |
| MySQL 8 | Database |
| HTML5 | Website structure |
| CSS3 | Styling and animations |
| JavaScript | Interactivity and form validation |

## Project Structure

```text
Portfolio-Website/
│
├── database/
│   └── schema.sql
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/achal/portfolio/
│       │       └── PortfolioApplication.java
│       │
│       └── resources/
│           ├── static/
│           │   ├── css/
│           │   ├── js/
│           │   ├── images/
│           │   └── index.html
│           │
│           └── application.properties
│
├── .gitignore
├── pom.xml
└── README.md
```

## Run Locally

### Prerequisites

Make sure the following are installed:

- JDK 17 or higher
- Apache Maven 3.9 or higher
- MySQL 8
- Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/achal-shukla/Portfolio-Website.git
```

Navigate into the project directory:

```bash
cd Portfolio-Website
```

### 2. Configure MySQL

Start your MySQL server and create a database:

```sql
CREATE DATABASE portfolio_db;
```

The application can also create the database automatically when the configured MySQL user has the required permissions.

### 3. Configure Environment Variables

The application uses environment variables to keep database credentials outside the source code.

**Windows PowerShell:**

```powershell
$env:DB_URL="jdbc:mysql://localhost:3306/portfolio_db?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC"
$env:DB_USERNAME="root"
$env:DB_PASSWORD="your_mysql_password"
```

Replace `your_mysql_password` with your MySQL password.

### 4. Build and Run

Build the project:

```bash
mvn clean package
```

Start the Spring Boot application:

```bash
mvn spring-boot:run
```

### 5. Open the Website

Visit:

http://localhost:8080

## Database

The application automatically creates the `contact_message` table using Hibernate when the application starts.

The database schema is also available in:

`database/schema.sql`

To view submitted contact messages:

```sql
USE portfolio_db;

SELECT * FROM contact_message;
```

To view the latest messages first:

```sql
SELECT * FROM contact_message
ORDER BY created_at DESC;
```

## Author

**Achal Shukla**

- GitHub: [achal-shukla](https://github.com/achal-shukla)
- LinkedIn: [achal-shukla-ai](https://linkedin.com/in/achal-shukla-ai)
- Email: achalshukla2006@gmail.com

---

If you find this project interesting, feel free to explore the repository!

