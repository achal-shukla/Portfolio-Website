package com.achal.portfolio;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
    private final ContactRepository repo;

    public ContactController(ContactRepository repo) { this.repo = repo; }

    public record ContactRequest(
        @NotBlank @Size(min = 2, max = 100) String name,
        @NotBlank @Email @Size(max = 150) String email,
        @NotBlank @Size(min = 10, max = 2000) String message) {}

    @PostMapping
    public ResponseEntity<Map<String, String>> submit(@Valid @RequestBody ContactRequest r) {
        repo.save(new ContactMessage(r.name().trim(), r.email().trim(), r.message().trim()));
        return ResponseEntity.ok(Map.of("status", "saved"));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    ResponseEntity<Map<String, String>> invalid() {
        return ResponseEntity.badRequest().body(Map.of("error", "Invalid form data"));
    }
}
