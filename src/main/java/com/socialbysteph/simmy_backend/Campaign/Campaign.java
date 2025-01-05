package com.socialbysteph.simmy_backend.Campaign;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Campaign {
    @Id
    private String id;
    private String name;
    private String objective;
    private String[] adSetIds;

    public Campaign(String objective, String id, String[] adSetIds, String name) {
        this.objective = objective;
        this.id = id;
        this.adSetIds = adSetIds;
        this.name = name;
    }

    public Campaign() {
        this.id = "-1";
        this.objective = "";
        this.adSetIds = new String[0];
        this.name = "";
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

    public String getObjective() {
        return objective;
    }

    public void setObjective(String objective) {
        this.objective = objective;
    }

    public String[] getAdSetIds() {
        return adSetIds;
    }

    public void setAdSetIds(String[] adSetIds) {
        this.adSetIds = adSetIds;
    }
}