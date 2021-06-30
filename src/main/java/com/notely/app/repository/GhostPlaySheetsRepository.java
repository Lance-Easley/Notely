package com.notely.app.repository;

import com.notely.app.models.GhostPlaySheet;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GhostPlaySheetsRepository extends CrudRepository<GhostPlaySheet, Long> {
    @Query("SELECT g FROM GhostPlaySheet g WHERE g.id = ?1")
    public GhostPlaySheet findById(String id);

    public List<GhostPlaySheet> findByAuthorId(long id);

    @Query("SELECT g FROM GhostPlaySheet g WHERE g.title LIKE %?1%")
    public List<GhostPlaySheet> searchAll(String title);

    public GhostPlaySheet findByIsPublic(boolean isPublic);

    public long deleteById(long id);
}