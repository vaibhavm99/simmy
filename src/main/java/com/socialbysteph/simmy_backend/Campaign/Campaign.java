package com.socialbysteph.simmy_backend.Campaign;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Campaign {
    @Id
    private String Id;
    private String Objective;
    private String[] AdSetIds;

    public Campaign(String objective, String id, String[] adSetIds) {
        Objective = objective;
        Id = id;
        AdSetIds = adSetIds;
    }

    public Campaign() {
        Id = "-1";
        Objective = "";
        AdSetIds = new String[0];
    }

    public String getId() {
        return Id;
    }

    public String getObjective() {
        return Objective;
    }

    public String[] getAdSetIds() {
        return AdSetIds;
    }

    public void setId(String id) {
        Id = id;
    }

    public void setObjective(String objective) {
        Objective = objective;
    }

    public void setAdSetIds(String[] adSetIds) {
        AdSetIds = adSetIds;
    }
}
