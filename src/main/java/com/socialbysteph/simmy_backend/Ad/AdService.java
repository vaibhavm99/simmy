package com.socialbysteph.simmy_backend.Ad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdService {

    private final AdRepository adRepository;

    @Autowired
    public AdService(AdRepository adRepository) {
        this.adRepository = adRepository;
    }

    public Ad createAd(Ad ad) {
        return adRepository.save(ad);
    }

    public Ad getAdById(String id) {
        return adRepository.findById(id).orElse(null);
    }

    public Ad updateAd(Ad ad) {
        return adRepository.save(ad);
    }

    public void deleteAd(String id) {
        adRepository.deleteById(id);
    }

}
