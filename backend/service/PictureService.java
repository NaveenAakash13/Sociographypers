package com.example.sociography.service;

import com.example.sociography.model.Picture;
import com.example.sociography.repository.PictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PictureService {

    @Autowired
    private PictureRepository pictureRepository;

    public List<Picture> findAll() {
        return pictureRepository.findAll();
    }

    public Optional<Picture> findById(Integer id) {
        return pictureRepository.findById(id);
    }

    public Picture save(Picture picture) {
        return pictureRepository.save(picture);
    }

    public void deleteById(Integer id) {
        pictureRepository.deleteById(id);
    }
}
