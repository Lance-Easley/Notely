package com.notely.app;

import com.notely.app.models.GhostPlaySheet;

public class GhostPlaySheetsDetails {

    private GhostPlaySheet ghostPlaySheet;

    public GhostPlaySheetsDetails(GhostPlaySheet ghostPlaySheet) {
        this.ghostPlaySheet = ghostPlaySheet;
    }

    public String getTitle() {
        return ghostPlaySheet.getTitle();
    }

    public String getTextContent() {
        return ghostPlaySheet.getTextContent();
    }

    public long getAuthorId() {
        return ghostPlaySheet.getAuthorId();
    }
}