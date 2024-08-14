package com.example.sociography.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sociography.model.Follower;

public interface FollowerRepository extends JpaRepository<Follower, Integer> {
}
