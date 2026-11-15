package com.achal.portfolio;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class ContactMessage {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 100) private String name;
    @Column(nullable = false, length = 150) private String email;
    @Column(nullable = false, columnDefinition = "TEXT") private String message;
    @Column(nullable = false) private LocalDateTime createdAt = LocalDateTime.now();

    protected ContactMessage() {}
    public ContactMessage(String name, String email, String message) {
        this.name = name; this.email = email; this.message = message;
    }
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getMessage() { return message; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}
