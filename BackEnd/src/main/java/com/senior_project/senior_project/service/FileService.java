package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.File;
import com.senior_project.senior_project.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

@Service
public class FileService {
    private final FileRepository fileRepository;

    @Autowired
    public FileService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public File getFile(int id) {
        Optional<File> file = fileRepository.findById(id);
        if(file.isEmpty()) {
            throw new IllegalArgumentException("File does not exist.");
        }
        return file.get();
    }

    public int addFile( MultipartFile data) throws IOException {
        File file = new File();
        file.setData(Base64.getEncoder().encode(data.getBytes()));
        return fileRepository.save(file).getFileID();
    }

    @Transactional
    public void updateFile(int fileID, MultipartFile data) throws IOException {
        Optional<File> updateingFile = fileRepository.findById(fileID);
        if(updateingFile.isEmpty()) {
            throw new IllegalArgumentException("File does not exist.");
        }

        updateingFile.get().setData(Base64.getEncoder().encode(data.getBytes()));
    }

    public void deleteFile(int fileID) {
        System.out.println(fileID);
        if(fileRepository.findById(fileID).isEmpty()) {
            throw new IllegalArgumentException("File does not exist.");
        }
        fileRepository.deleteById(fileID);
    }
}
