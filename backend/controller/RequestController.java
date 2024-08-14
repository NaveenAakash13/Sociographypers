package com.example.sociography.controller;

import com.example.sociography.model.Request;
import com.example.sociography.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/requests")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @GetMapping
    public List<Request> getAllRequests() {
        return requestService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Request> getRequestById(@PathVariable Integer id) {
        Optional<Request> request = requestService.findById(id);
        return request.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Request createRequest(@RequestBody Request request) {
        return requestService.save(request);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Request> updateRequest(@PathVariable Integer id, @RequestBody Request updatedRequest) {
        return requestService.findById(id)
            .map(existingRequest -> {
                updatedRequest.setId(existingRequest.getId());
                return ResponseEntity.ok(requestService.save(updatedRequest));
            }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteRequest(@PathVariable Integer id) {
        return requestService.findById(id)
            .map(existingRequest -> {
                requestService.deleteById(id);
                return ResponseEntity.noContent().build();
            }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

