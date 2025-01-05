package com.socialbysteph.simmy_backend.AdSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdSetController {

    @Autowired
    private AdSetService adSetService;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST, path = "/saveAdSet")
    public boolean createAdSet(@RequestBody AdSet adSet) {
        adSetService.createAdSet(adSet);
        return true;
    }
}
