package com.example.sociography.service;

import com.example.sociography.model.Request;
import com.example.sociography.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    public List<Request> findAll() {
        return requestRepository.findAll();
    }

    public Optional<Request> findById(Integer id) {
        return requestRepository.findById(id);
    }

    public Request save(Request request) {
        return requestRepository.save(request);
    }

    public void deleteById(Integer id) {
        requestRepository.deleteById(id);
    }
}
