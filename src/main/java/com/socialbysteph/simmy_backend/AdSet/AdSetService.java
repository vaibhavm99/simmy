package com.socialbysteph.simmy_backend.AdSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdSetService {

    private final AdSetRepository adSetRepository;

    @Autowired
    public AdSetService(AdSetRepository adSetRepository) {
        this.adSetRepository = adSetRepository;
    }

    public AdSet createAdSet(AdSet adSet) {
        return adSetRepository.save(adSet);
    }

    public AdSet getAdSetById(String id) {
        return adSetRepository.findById(id).orElse(null);
    }

    public AdSet updateAdSet(AdSet adSet) {
        return adSetRepository.save(adSet);
    }

    public void deleteAdSet(String id) {
        adSetRepository.deleteById(id);
    }

}
