package com.socialbysteph.simmy_backend.Campaign;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
public class CampaignController {

    @Autowired
    private CampaignService campaignService;

    @CrossOrigin(origins = {"http://localhost:3000", "https://newsimmy-645314c66057.herokuapp.com"})
    @RequestMapping(method = RequestMethod.POST, path = "/saveCampaign")
    public boolean createCampaign(@RequestBody Campaign campaign) {
        campaignService.createCampaign(campaign);
        return true;
    }
}
