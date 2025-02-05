package com.socialbysteph.simmy_backend.Ad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdController {

    @Autowired
    private AdService adService;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST, path = "/saveAd")
    public boolean createAd(@RequestBody Ad ad) {
        adService.createAd(ad);
        return true;
    }

}
