package com.socialbysteph.simmy_backend.Ad;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Ad {
    @Id
    private String Id;
    private String Name;
    private String AdSetup;
    private String Format;
    private String Text;
    private String Headline;
    private String Description;
    private String CallToAction;
    private String Image;
    private String Video;

    public Ad(String id, String name, String adSetup, String format, String text, String headline, String description, String callToAction, String image, String video) {
        Id = id;
        Name = name;
        AdSetup = adSetup;
        Format = format;
        Text = text;
        Headline = headline;
        Description = description;
        CallToAction = callToAction;
        Image = image;
        Video = video;
    }

    public Ad() {
        Id = "-1";
        Name = "";
        AdSetup = "";
        Format = "";
        Text = "";
        Headline = "";
        Description = "";
        CallToAction = "";
        Image = "";
        Video = "";
    }


    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getAdSetup() {
        return AdSetup;
    }

    public void setAdSetup(String adSetup) {
        AdSetup = adSetup;
    }

    public String getFormat() {
        return Format;
    }

    public void setFormat(String format) {
        Format = format;
    }

    public String getText() {
        return Text;
    }

    public void setText(String text) {
        Text = text;
    }

    public String getHeadline() {
        return Headline;
    }

    public void setHeadline(String headline) {
        Headline = headline;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getCallToAction() {
        return CallToAction;
    }

    public void setCallToAction(String callToAction) {
        CallToAction = callToAction;
    }

    public String getImage() {
        return Image;
    }

    public void setImage(String image) {
        Image = image;
    }

    public String getVideo() {
        return Video;
    }

    public void setVideo(String video) {
        Video = video;
    }
}
