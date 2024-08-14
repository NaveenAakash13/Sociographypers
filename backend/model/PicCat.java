package com.example.sociography.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Pic_Cat")
public class PicCat {

    @EmbeddedId
    private PicCatId id;

    @ManyToOne
    @MapsId("picId")
    @JoinColumn(name = "pic_id")
    private Picture picture;

    @ManyToOne
    @MapsId("catId")
    @JoinColumn(name = "cat_id")
    private Category category;

	public PicCatId getId() {
		return id;
	}

	public void setId(PicCatId id) {
		this.id = id;
	}

	public Picture getPicture() {
		return picture;
	}

	public void setPicture(Picture picture) {
		this.picture = picture;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

    // Getters and Setters
    
    
}
