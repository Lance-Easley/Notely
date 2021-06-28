package com.notely.app.models;

import javax.persistence.*;

@Entity
@Table(name = "ghostPlaySheets")
public class GhostPlaySheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String title;

    @Column(name = "author_id", nullable = false)
    private long authorId;

    @Column(name = "text_content", nullable = false, columnDefinition="TEXT")
    private String textContent;

    @Column(name = "is_public", nullable = false)
    private boolean isPublic;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getAuthorId() {
        return authorId;
    }

    public void setAuthorId(long authorId) {
        this.authorId = authorId;
    }

    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    public boolean getIsPublic() {
        return isPublic;
    }

    public void setIsPublic(boolean isPublic) {
        this.isPublic = isPublic;
    }

    @Override
    public String toString() {
        return "GhostPlaySheet{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", authorId=" + authorId +
                ", textContent='" + textContent + '\'' +
                ", isPublic=" + isPublic +
                '}';
    }
}
