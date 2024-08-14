package com.example.sociography.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sociography.model.Picture;

public interface PictureRepository extends JpaRepository<Picture, Integer> {
}
