package com.example.sociography.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sociography.model.Like;

public interface LikeRepository extends JpaRepository<Like, Integer> {
}
