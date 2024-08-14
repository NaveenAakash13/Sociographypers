package com.example.sociography.controller;

import com.example.sociography.model.Photographer;
import com.example.sociography.service.PhotographerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/photographers")
public class PhotographerController {

    @Autowired
    private PhotographerService photographerService;

    @GetMapping
    public List<Photographer> getAllPhotographers() {
        return photographerService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Photographer> getPhotographerById(@PathVariable Integer id) {
        Optional<Photographer> photographer = photographerService.findById(id);
        return photographer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Photographer createPhotographer(@RequestBody Photographer photographer) {
        return photographerService.save(photographer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Photographer> updatePhotographer(@PathVariable Integer id, @RequestBody Photographer updatedPhotographer) {
        return photographerService.findById(id)
            .map(existingPhotographer -> {
                updatedPhotographer.setId(existingPhotographer.getId());
                return ResponseEntity.ok(photographerService.save(updatedPhotographer));
            }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePhotographer(@PathVariable Integer id) {
        return photographerService.findById(id)
            .map(existingPhotographer -> {
                photographerService.deleteById(id);
                return ResponseEntity.noContent().build();
            }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

