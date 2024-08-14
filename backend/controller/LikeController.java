package com.example.sociography.controller;

import com.example.sociography.model.Like;
import com.example.sociography.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/likes")
public class LikeController {

    @Autowired
    private LikeService likeService;

    @GetMapping
    public List<Like> getAllLikes() {
        return likeService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Like> getLikeById(@PathVariable Integer id) {
        Optional<Like> like = likeService.findById(id);
        return like.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Like createLike(@RequestBody Like like) {
        return likeService.save(like);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Like> updateLike(@PathVariable Integer id, @RequestBody Like updatedLike) {
        return likeService.findById(id)
            .map(existingLike -> {
                updatedLike.setId(existingLike.getId());
                return ResponseEntity.ok(likeService.save(updatedLike));
            }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteLike(@PathVariable Integer id) {
        return likeService.findById(id)
            .map(existingLike -> {
                likeService.deleteById(id);
                return ResponseEntity.noContent().build();
            }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

