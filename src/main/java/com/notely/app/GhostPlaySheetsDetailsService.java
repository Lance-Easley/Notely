package com.notely.app;

import com.notely.app.models.GhostPlaySheet;
import com.notely.app.repository.GhostPlaySheetsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class GhostPlaySheetsDetailsService {

    @Autowired
    private GhostPlaySheetsRepository ghostPlayRepo;

    public String getTextContentById(long id) {
        Optional<GhostPlaySheet> possibleSheet = ghostPlayRepo.findById(id);

        if (possibleSheet.isPresent()) {
            return possibleSheet.get().getTextContent();
        }
        return "";
    }

    public List<GhostPlaySheet> getSheetsByAuthorId(long id, long loggedId) {
        List<GhostPlaySheet> listSheets = ghostPlayRepo.findByAuthorId(id);

        if (loggedId != id) {
            listSheets.removeIf(sheet -> !sheet.getIsPublic());
        }

        return listSheets;
    }

    public List<GhostPlaySheet> getAllFilteredSheets(long loggedId) {
        List<GhostPlaySheet> listSheets = (List<GhostPlaySheet>) ghostPlayRepo.findAll();

        listSheets.removeIf(sheet -> !sheet.getIsPublic() && sheet.getAuthorId() != loggedId);

        return listSheets;
    }

    public void saveSheet(GhostPlaySheet sheet, long authorId) {
        sheet.setAuthorId(authorId);
        ghostPlayRepo.save(sheet);
    }

    public Optional<GhostPlaySheet> getSheetById(long id) {
        return ghostPlayRepo.findById(id);
    }

    public void updateSheet(long oldId, GhostPlaySheet newSheet) {
        Optional<GhostPlaySheet> possibleSheet = ghostPlayRepo.findById(oldId);

        GhostPlaySheet oldSheet;

        if (possibleSheet.isPresent()) {
            oldSheet = possibleSheet.get();

            oldSheet.setTitle(newSheet.getTitle());
            oldSheet.setTextContent(newSheet.getTextContent());
            oldSheet.setIsPublic(newSheet.getIsPublic());

            ghostPlayRepo.save(oldSheet);
        }
    }

    public void deleteSheet(GhostPlaySheet sheet) {
        ghostPlayRepo.delete(sheet);
    }
}