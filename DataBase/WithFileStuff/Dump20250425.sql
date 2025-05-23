CREATE DATABASE  IF NOT EXISTS `seniorproject` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `seniorproject`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: seniorproject
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `ClassID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `SemesterID` int DEFAULT NULL,
  `MeetingTimesID` int DEFAULT NULL,
  `MeetingLocation` varchar(255) DEFAULT NULL,
  `UserID` int NOT NULL,
  `Instructor` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `OfficeHoursID` int DEFAULT NULL,
  `InstructorPhone` varchar(30) DEFAULT NULL,
  `InstructorEmail` varchar(255) DEFAULT NULL,
  `TextBook` varchar(255) DEFAULT NULL,
  `StartDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  `OfficeLocation` varchar(255) DEFAULT NULL,
  `syllabus` int DEFAULT NULL,
  PRIMARY KEY (`ClassID`),
  KEY `class_ibfk_3_idx` (`UserID`),
  KEY `class_ibfk_1_idx` (`SemesterID`),
  KEY `class_ibfk_2_idx` (`MeetingTimesID`),
  KEY `class_ibfk_4_idx` (`OfficeHoursID`),
  KEY `class_ibfk_5_idx` (`syllabus`),
  CONSTRAINT `class_ibfk_1` FOREIGN KEY (`SemesterID`) REFERENCES `semester` (`SemesterID`),
  CONSTRAINT `class_ibfk_2` FOREIGN KEY (`MeetingTimesID`) REFERENCES `meetingtimes` (`MeetingTimesID`),
  CONSTRAINT `class_ibfk_3` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  CONSTRAINT `class_ibfk_4` FOREIGN KEY (`OfficeHoursID`) REFERENCES `meetingtimes` (`MeetingTimesID`),
  CONSTRAINT `class_ibfk_5` FOREIGN KEY (`syllabus`) REFERENCES `files` (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'Algorithm Desighn',1,1,'WCM 105',1,'Yousef','Learn to deisgn and analyze algorithms',1,'816-555-1234','Yousef@ucmo.edu','Algorithm Stuff','2025-01-12','2025-05-10',NULL,NULL),(2,'Operating Systems',1,5,'WCM 231',1,'Park','Learn about threads and stuff',6,'816-555-1234','Park@ucmo.edu','','2025-01-12','2025-05-10',NULL,NULL),(3,'Senior Project',1,7,'WCM 131',1,'Grebe and Johnson','Make a big project and go way overboard on the scope',8,'816-555-1234','Johnson@ucmo.edu','','2025-01-12','2025-05-10',NULL,NULL),(5,'Compputer Networking',1,13,'Online',1,'Jin','Learn about computer networking',14,'816-555-1234','jin@ucmo.edu','Computer Networking stuff','2025-01-12','2025-05-10',NULL,NULL),(7,'College Algebra',NULL,16,'WCM 205',2,'Professor Smith','College Algebra',17,'816-555-5555','smith@ucmo.edu','Algebra Stuff','2025-01-12','2025-05-10',NULL,NULL),(8,'Advanced Literature',NULL,18,'WCM 205',2,'Professor Smith','Gross literature stuff',19,'816-555-5555','smith@ucmo.edu','Very long and boring stories compiled for your misery.','2025-01-12','2025-05-10',NULL,NULL),(11,'Random',2,21,NULL,1,'Random','Random',NULL,NULL,NULL,NULL,'2025-01-12','2025-05-10',NULL,NULL);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `EventID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Start` datetime DEFAULT NULL,
  `End` datetime DEFAULT NULL,
  `ClassID` int DEFAULT NULL,
  `UserID` int NOT NULL,
  `isHomework` tinyint DEFAULT NULL,
  `file` int DEFAULT NULL,
  `isFavorite` tinyint DEFAULT NULL,
  PRIMARY KEY (`EventID`),
  KEY `UserID` (`UserID`),
  KEY `event_ibfk_1_idx` (`ClassID`),
  KEY `event_ibfk_3_idx` (`file`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`ClassID`) REFERENCES `class` (`ClassID`),
  CONSTRAINT `event_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  CONSTRAINT `event_ibfk_3` FOREIGN KEY (`file`) REFERENCES `files` (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'HW1','HW1 is due.','2025-01-21 00:00:00','2025-01-21 00:00:00',1,1,NULL,NULL,NULL),(2,'Host Smash tournament','Host a big smash tournement in the untion building','2025-03-29 08:00:00','2025-03-29 22:00:00',NULL,2,NULL,NULL,NULL),(3,'HW2','HW2 is due.','2025-02-21 00:00:00','2025-02-21 00:00:00',5,1,NULL,NULL,NULL),(4,'HW3','HW3 is due.','2025-03-21 00:00:00','2025-03-21 00:00:00',5,1,NULL,NULL,NULL),(6,'Random','Random','2025-03-21 00:00:00','2025-03-21 00:00:00',NULL,1,NULL,NULL,NULL),(7,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(8,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(9,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(10,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(11,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(12,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(13,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(14,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(15,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(16,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(17,'test','test','2025-04-24 05:00:00','2025-04-30 05:00:00',1,1,NULL,NULL,NULL),(18,'New Homework','test','2025-04-25 00:16:57','2025-04-25 00:16:57',2,1,NULL,NULL,NULL),(19,'New Homework','test','2025-04-25 00:16:57','2025-04-25 00:16:57',2,1,NULL,NULL,NULL),(20,'New Homework1111','asdf','2025-04-25 00:24:50','2025-04-25 00:24:50',3,1,NULL,NULL,NULL),(21,'New Homework',NULL,'2025-04-25 00:27:18','2025-04-25 00:27:18',3,1,NULL,NULL,NULL),(22,'New Homework1','asdf','2025-04-25 00:28:16','2025-04-25 00:28:16',3,1,NULL,NULL,NULL),(23,'New Homework',NULL,'2025-04-25 00:33:24','2025-04-25 00:33:24',3,1,NULL,NULL,NULL),(24,'New Homework1','test','2025-04-25 00:43:02','2025-04-25 00:43:02',5,1,NULL,NULL,NULL),(25,'New Homework1','test','2025-04-25 00:43:02','2025-04-25 00:43:02',5,1,NULL,NULL,NULL),(26,'New Homework test','test','2025-04-25 00:44:03','2025-04-25 00:44:03',3,1,NULL,NULL,NULL),(27,'New Homework1','asdf','2025-04-25 00:44:35','2025-04-25 00:44:35',3,1,NULL,NULL,NULL),(28,'as;ldjf;lasdl;kfjl;kadf',';alsjdfl;ja;sldjfljasdf','2025-04-25 02:12:39','2025-04-25 02:12:39',2,1,NULL,NULL,NULL),(29,'New Hoasdfasdfmework','asdf','2025-04-25 02:15:19','2025-04-25 02:15:19',2,1,NULL,NULL,NULL),(30,'New Hdhgomework','dgfhj','2025-04-25 02:15:33','2025-04-25 02:15:33',2,1,NULL,NULL,NULL),(31,'New Hdasghjomework','asgdhgf','2025-04-25 02:20:58','2025-04-25 02:20:58',1,1,NULL,NULL,NULL),(32,'Howdy','Hello there','2025-04-25 00:00:00','2025-04-25 00:00:00',3,1,1,NULL,1),(33,'Howdy','Hello thereeeeeeeeeeeee','2025-04-25 00:00:00','2025-04-25 00:00:00',1,1,NULL,NULL,NULL),(34,'awesome','awesome','2025-04-25 03:29:53','2025-04-25 03:29:53',5,1,NULL,NULL,NULL),(35,'testing','testing','2025-04-25 03:43:18','2025-04-25 03:43:18',3,1,NULL,NULL,NULL),(36,'test','test','2025-04-25 05:00:00','2025-04-26 05:00:00',1,1,NULL,NULL,NULL),(37,'Howdy','Hello thereeeeeee','2025-04-25 00:00:00','2025-04-25 00:00:00',1,1,NULL,NULL,NULL),(38,'New Homework','adsfgh','2025-04-25 05:00:00','2025-04-25 05:00:00',1,1,NULL,NULL,NULL),(39,'fsdgfh','afsdghfj','2025-04-25 05:00:00','2025-04-25 05:00:00',1,1,NULL,NULL,NULL),(40,'testingHomework','asdfasdf','2025-04-25 05:00:00','2025-04-25 05:00:00',1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `FileID` int NOT NULL AUTO_INCREMENT,
  `Data` mediumblob,
  PRIMARY KEY (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,NULL),(2,NULL),(3,_binary '48656C6C6F2C204920616D20612066696C65'),(4,_binary 'VGhpcyBpcyBub3RlIDE='),(5,_binary 'dHlwZQ=='),(6,_binary 'c2FmZGhnaw=='),(7,_binary 'YWdkc2Zoamc='),(8,_binary 'dGVzdGluZw=='),(9,_binary 'dGVzdGluZyB0ZXN0aW5nIHRlc3Rpbmc=');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meetingtimes`
--

DROP TABLE IF EXISTS `meetingtimes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meetingtimes` (
  `MeetingTimesID` int NOT NULL AUTO_INCREMENT,
  `MondayStart` time DEFAULT NULL,
  `MondayEnd` time DEFAULT NULL,
  `TuesdayStart` time DEFAULT NULL,
  `TuesdayEnd` time DEFAULT NULL,
  `WednesdayStart` time DEFAULT NULL,
  `WednesdayEnd` time DEFAULT NULL,
  `ThursdayStart` time DEFAULT NULL,
  `ThursdayEnd` time DEFAULT NULL,
  `FridayStart` time DEFAULT NULL,
  `FridayEnd` time DEFAULT NULL,
  `SaturdayStart` time DEFAULT NULL,
  `SaturdayEnd` time DEFAULT NULL,
  `SundayStart` time DEFAULT NULL,
  `SundayEnd` time DEFAULT NULL,
  PRIMARY KEY (`MeetingTimesID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetingtimes`
--

LOCK TABLES `meetingtimes` WRITE;
/*!40000 ALTER TABLE `meetingtimes` DISABLE KEYS */;
INSERT INTO `meetingtimes` VALUES (1,'11:00:00','11:50:00',NULL,NULL,'11:00:00','11:50:00',NULL,NULL,'11:00:00','11:50:00',NULL,NULL,NULL,NULL),(2,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,NULL,NULL),(3,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(5,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,NULL,NULL),(6,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,NULL,NULL),(7,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(8,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(11,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(12,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(13,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'14:06:00','14:09:00'),(14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'17:00:00','17:50:00',NULL,NULL,'17:00:00','17:50:00',NULL,NULL,'17:00:00','17:50:00',NULL,NULL,NULL,NULL),(16,'10:00:00','10:50:00',NULL,NULL,'10:00:00','10:50:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'13:00:00','14:00:00',NULL,NULL,'14:00:00','14:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'09:00:00','09:50:00',NULL,NULL,'09:00:00','09:50:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'13:00:00','14:00:00',NULL,NULL,'14:00:00','14:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,NULL,NULL,'13:00:00','14:50:00',NULL,NULL,'13:00:00','14:50:00',NULL,NULL,NULL,NULL,NULL,NULL),(21,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'08:00:00','10:50:00',NULL,NULL);
/*!40000 ALTER TABLE `meetingtimes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `NotesID` int NOT NULL AUTO_INCREMENT,
  `ClassID` int NOT NULL,
  `Date` date DEFAULT NULL,
  `Notes` int DEFAULT NULL,
  `isFavorite` tinyint DEFAULT NULL,
  PRIMARY KEY (`NotesID`),
  KEY `notes_ifbk_1_idx` (`ClassID`),
  KEY `notes_ibfk_2_idx` (`Notes`),
  CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`Notes`) REFERENCES `files` (`FileID`),
  CONSTRAINT `notes_ifbk_1` FOREIGN KEY (`ClassID`) REFERENCES `class` (`ClassID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (6,1,'2025-04-25',NULL,1),(7,1,'2025-04-25',NULL,1),(8,1,NULL,7,NULL),(9,1,'2025-04-25',8,NULL),(10,1,'2025-04-25',9,NULL);
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semester`
--

DROP TABLE IF EXISTS `semester`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semester` (
  `SemesterID` int NOT NULL AUTO_INCREMENT,
  `SemesterName` varchar(30) NOT NULL,
  `UserID` int NOT NULL,
  PRIMARY KEY (`SemesterID`),
  KEY `ibfk_semester_1_idx` (`UserID`),
  CONSTRAINT `ibfk_semester_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester`
--

LOCK TABLES `semester` WRITE;
/*!40000 ALTER TABLE `semester` DISABLE KEYS */;
INSERT INTO `semester` VALUES (1,'Spring 2025',1),(2,'Fall 2024',1),(8,'Spring 2025',2),(13,'test',12);
/*!40000 ALTER TABLE `semester` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) NOT NULL,
  `PasswordHash` varchar(255) NOT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserName` (`UserName`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'MilesL35','VeryStrongPassword'),(2,'IsaiahH','VeryStrongPassword2'),(12,'Justus','Doesn\'t matter anymore. We\'re not getting to authentication.');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-25 15:03:03
