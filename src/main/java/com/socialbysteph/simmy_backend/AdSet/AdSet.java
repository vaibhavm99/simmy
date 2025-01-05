package com.socialbysteph.simmy_backend.AdSet;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AdSet {
    @Id
    private String id;
    private String name;
    private String conversionLocation;
    private String pixel;
    private String conversionEvent;
    private String budgetType;
    private String budgetAmount;
    private String[] adIds;

    public AdSet(String id, String name, String conversionLocation, String pixel, String conversionEvent, String budgetType, String budgetAmount, String[] adIds) {
        this.id = id;
        this.name = name;
        this.conversionLocation = conversionLocation;
        this.pixel = pixel;
        this.conversionEvent = conversionEvent;
        this.budgetType = budgetType;
        this.budgetAmount = budgetAmount;
        this.adIds = adIds;
    }

    public AdSet() {
        id = "-1";
        name = "";
        conversionLocation = "";
        pixel = "";
        conversionEvent = "";
        budgetType = "";
        budgetAmount = "";
        adIds = new String[0];
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

    public String getConversionLocation() {
        return conversionLocation;
    }

    public void setConversionLocation(String type) {
        this.conversionLocation = type;
    }

    public String getPixel() {
        return pixel;
    }

    public void setPixel(String pixel) {
        this.pixel = pixel;
    }

    public String getConversionEvent() {
        return conversionEvent;
    }

    public void setConversionEvent(String conversionEvent) {
        this.conversionEvent = conversionEvent;
    }

    public String getBudgetType() {
        return budgetType;
    }

    public void setBudgetType(String budgetType) {
        this.budgetType = budgetType;
    }

    public String getBudgetAmount() {
        return budgetAmount;
    }

    public void setBudgetAmount(String budgetAmount) {
        this.budgetAmount = budgetAmount;
    }

    public String[] getAdIds() {
        return adIds;
    }

    public void setAdIds(String[] adIds) {
        this.adIds = adIds;
    }
}
