package com.socialbysteph.simmy_backend.Ad;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Ad {
    @Id
    private String id;
    private String name;
    private String adSetup;
    private String format;
    private String text;
    private String headline;
    private String description;
    private String callToAction;
    private String image;
    private String video;

    public Ad(String id, String name, String adSetup, String format, String text, String headline, String description, String callToAction, String image, String video) {
        this.id = id;
        this.name = name;
        this.adSetup = adSetup;
        this.format = format;
        this.text = text;
        this.headline = headline;
        this.description = description;
        this.callToAction = callToAction;
        this.image = image;
        this.video = video;
    }

    public Ad() {
        id = "-1";
        name = "";
        adSetup = "";
        format = "";
        text = "";
        headline = "";
        description = "";
        callToAction = "";
        image = "";
        video = "";
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdSetup() {
        return adSetup;
    }

    public void setAdSetup(String adSetup) {
        this.adSetup = adSetup;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCallToAction() {
        return callToAction;
    }

    public void setCallToAction(String callToAction) {
        this.callToAction = callToAction;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }
}
