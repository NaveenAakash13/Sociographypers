package com.example.sociography.service;

import com.example.sociography.model.Partner;
import com.example.sociography.model.Photographer;
import com.example.sociography.repository.PartnerRepository;
import com.example.sociography.repository.PhotographerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private PartnerRepository partnerRepository;

    @Autowired
    private PhotographerRepository photographerRepository;

    public String authenticate(String username, String password) {
        // Check Photographer
        Photographer photographer = photographerRepository.findByUsername(username);
        if (photographer != null && photographer.getPassword().equals(password)) {
            return "photographer";
        }

        // Check Partner
        Partner partner = partnerRepository.findByUsername(username);
        if (partner != null && partner.getPassword().equals(password)) {
            return "partner";
        }

        // If no match found
        return "Invalid credentials";
    }
}
