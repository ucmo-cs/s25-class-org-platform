package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.File;
import com.senior_project.senior_project.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("file")
public class FileController {
    final private FileService fileService;

    @Autowired
    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/{id}")
    public File getFile (@PathVariable("id")int id) {
        return fileService.getFile(id);
    }

    @PostMapping("/")
    public int addFile( @RequestParam("file")MultipartFile data) {
        try {
            return fileService.addFile(data);
        } catch (IOException e) {
            throw new IllegalArgumentException("There was a problem translating the file.");
        }
    }

    @PutMapping("/{id}")
    public void updateFile(@PathVariable("id")int id, @RequestParam("file")MultipartFile data) {
        try {
            fileService.updateFile(id, data);
        } catch (IOException e) {
            throw new IllegalArgumentException("There was a problem translating the file.");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteFile(@PathVariable("id")int id) {
        fileService.deleteFile(id);
    }
}
