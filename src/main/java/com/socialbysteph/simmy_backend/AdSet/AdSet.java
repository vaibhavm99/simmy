package com.socialbysteph.simmy_backend.AdSet;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AdSet {
    @Id
    private String Id;
    private String Name;
    private String Type;
    private String Pixel;
    private String ConversionEvent;
    private String BudgetType;
    private String BudgetAmount;
    private String[] AdIds;

    public AdSet(String id, String name, String type, String pixel, String conversionEvent, String budgetType, String budgetAmount, String[] adIds) {
        Id = id;
        Name = name;
        Type = type;
        Pixel = pixel;
        ConversionEvent = conversionEvent;
        BudgetType = budgetType;
        BudgetAmount = budgetAmount;
        AdIds = adIds;
    }

    public AdSet() {
        Id = "-1";
        Name = "";
        Type = "";
        Pixel = "";
        ConversionEvent = "";
        BudgetType = "";
        BudgetAmount = "";
        AdIds = new String[0];
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

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    public String getPixel() {
        return Pixel;
    }

    public void setPixel(String pixel) {
        Pixel = pixel;
    }

    public String getConversionEvent() {
        return ConversionEvent;
    }

    public void setConversionEvent(String conversionEvent) {
        ConversionEvent = conversionEvent;
    }

    public String getBudgetType() {
        return BudgetType;
    }

    public void setBudgetType(String budgetType) {
        BudgetType = budgetType;
    }

    public String getBudgetAmount() {
        return BudgetAmount;
    }

    public void setBudgetAmount(String budgetAmount) {
        BudgetAmount = budgetAmount;
    }

    public String[] getAdIds() {
        return AdIds;
    }

    public void setAdIds(String[] adIds) {
        AdIds = adIds;
    }
}
