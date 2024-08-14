package com.example.sociography.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Followers")
public class Follower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "connection_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "following_id", nullable = false)
    private Photographer following;

    @Column(name = "follower_id")
    private int followerId;

    @Column(name = "follower_type")
    private String followerType;

    @Column(name = "conn_timestamp")
    private LocalDateTime timestamp;

	public int getConnectionId() {
		return id;
	}

	public void setConnectionId(int id) {
		this.id = id;
	}

	public Photographer getFollowing() {
		return following;
	}

	public void setFollowing(Photographer following) {
		this.following = following;
	}

	public int getFollowerId() {
		return followerId;
	}

	public void setFollowerId(int followerId) {
		this.followerId = followerId;
	}

	public String getFollowerType() {
		return followerType;
	}

	public void setFollowerType(String followerType) {
		this.followerType = followerType;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

    // Getters and Setters
}

