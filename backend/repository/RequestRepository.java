package com.example.sociography.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sociography.model.Request;

public interface RequestRepository extends JpaRepository<Request, Integer> {
}
