# Achal Shukla: Portfolio (Spring Boot + MySQL)

## Run in VS Code
1. Install JDK 17+, Maven 3.9+ and MySQL 8.
2. In VS Code install "Extension Pack for Java" and "Spring Boot Extension Pack".
3. Open this folder. Edit `src/main/resources/application.properties` and set your MySQL password.
4. Run `PortfolioApplication.java` (Run button) or `mvn spring-boot:run` in the terminal.
5. Open http://localhost:8080

The database and `contact_message` table are created automatically. `database/schema.sql` is the same schema for your report.
View saved messages: `SELECT * FROM contact_message;`

## Edit your content
All text is in `src/main/resources/static/index.html`. Skill levels are the `data-level` numbers. Colours are at the top of `css/style.css`.
