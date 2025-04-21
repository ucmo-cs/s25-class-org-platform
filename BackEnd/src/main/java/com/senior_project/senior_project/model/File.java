package com.senior_project.senior_project.model;

import jakarta.persistence.*;

import java.util.Arrays;

@Entity
@Table(name = "files")
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fileid")
    int fileID;

    @Lob
    @Column(name = "data")
    byte[] data;

    public File() {
    }

    public File(byte[] data) {
        this.data = data;
    }

    public File(int fileID, byte[] data) {
        this.fileID = fileID;
        this.data = data;
    }

    public int getFileID() {
        return fileID;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "File{" +
                "fileID=" + fileID +
                ", data=" + Arrays.toString(data) +
                '}';
    }
}
