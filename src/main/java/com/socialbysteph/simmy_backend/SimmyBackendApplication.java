package com.socialbysteph.simmy_backend;

import com.socialbysteph.simmy_backend.Campaign.CampaignController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SimmyBackendApplication {
	private static final Logger logger = LoggerFactory.getLogger(CampaignController.class);

	public static void main(String[] args) {
		logger.info("Starting Simmy Backend");
		SpringApplication.run(SimmyBackendApplication.class, args);
	}

}
