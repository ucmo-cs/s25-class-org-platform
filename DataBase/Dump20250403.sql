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
  `OfficeLocation` varchar(255) DEFAULT NULL,
  `OfficeHoursID` int DEFAULT NULL,
  `InstructorPhone` varchar(30) DEFAULT NULL,
  `InstructorEmail` varchar(255) DEFAULT NULL,
  `TextBook` varchar(255) DEFAULT NULL,
  `StartDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  PRIMARY KEY (`ClassID`),
  KEY `class_ibfk_3_idx` (`UserID`),
  KEY `class_ibfk_1_idx` (`SemesterID`),
  KEY `class_ibfk_2_idx` (`MeetingTimesID`),
  KEY `class_ibfk_4_idx` (`OfficeHoursID`),
  CONSTRAINT `class_ibfk_1` FOREIGN KEY (`SemesterID`) REFERENCES `semester` (`SemesterID`),
  CONSTRAINT `class_ibfk_2` FOREIGN KEY (`MeetingTimesID`) REFERENCES `meetingtimes` (`MeetingTimesID`),
  CONSTRAINT `class_ibfk_3` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  CONSTRAINT `class_ibfk_4` FOREIGN KEY (`OfficeHoursID`) REFERENCES `meetingtimes` (`MeetingTimesID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'Algorithm Desighn',1,1,'WCM 105',1,'Yousef','Learn to deisgn and analyze algorithms','WCM 207',1,'816-555-1234','Yousef@ucmo.edu','Algorithm Stuff','2025-01-12','2025-05-10'),(2,'Operating Systems',1,5,'WCM 231',1,'Park','Learn about threads and stuff','WCM ???',6,'816-555-1234','Park@ucmo.edu','','2025-01-12','2025-05-10'),(3,'Senior Project',1,7,'WCM 131',1,'Grebe and Johnson','Make a big project and go way overboard on the scope','WCM 12?',8,'816-555-1234','Johnson@ucmo.edu','','2025-01-12','2025-05-10'),(5,'Compputer Networking',1,13,'Online',1,'Jin','Learn about computer networking','Zoom',14,'816-555-1234','jin@ucmo.edu','Computer Networking stuff','2025-01-12','2025-05-10');
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
  `isHomework` bool default null,
  `file` int default null,
  PRIMARY KEY (`EventID`),
  KEY `UserID` (`UserID`),
  KEY `event_ibfk_1_idx` (`ClassID`),
  KEY `event_ibfk_2_idx` (`file`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`ClassID`) REFERENCES `class` (`ClassID`),
  CONSTRAINT `event_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  CONSTRAINT `event_ibfk_3` FOREIGN KEY (`file`) REFERENCES `files` (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'HW1','HW1 is due.','2025-01-21 00:00:00','2025-01-21 00:00:00',1,1, TRUE, null),(2,'Host Smash tournament','Host a big smash tournement in the untion building','2025-03-29 08:00:00','2025-03-29 22:00:00',NULL,2, FALSE, NULL),(3,'HW2','HW2 is due.','2025-02-21 00:00:00','2025-02-21 00:00:00',5,1, TRUE, NULL),(4,'HW3','HW3 is due.','2025-03-21 00:00:00','2025-03-21 00:00:00',5,1,TRUE, NULL),(6,'Random','Random','2025-03-21 00:00:00','2025-03-21 00:00:00',NULL,1, FALSE, NULL);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF exists `files`;

CREATE TABLE `files` (
	`FileID` INT NOT NULL auto_increment,
    `Data` mediumblob DEFAULT NULL,
    primary key (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetingtimes`
--

LOCK TABLES `meetingtimes` WRITE;
/*!40000 ALTER TABLE `meetingtimes` DISABLE KEYS */;
INSERT INTO `meetingtimes` VALUES (1,'11:00:00','11:50:00',NULL,NULL,'11:00:00','11:50:00',NULL,NULL,'11:00:00','11:50:00',NULL,NULL,NULL,NULL),(2,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,NULL,NULL),(3,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(5,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,NULL,NULL),(6,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,'12:00:00','12:50:00',NULL,NULL,NULL,NULL),(7,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(8,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(11,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(12,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,'13:00:00','13:50:00',NULL,NULL,NULL,NULL),(13,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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
  PRIMARY KEY (`NotesID`),
  KEY `notes_ifbk_1_idx` (`ClassID`),
  KEY `notes_ifbk_2_idx` (`Notes`),
  CONSTRAINT `notes_ifbk_1` FOREIGN KEY (`ClassID`) REFERENCES `class` (`ClassID`),
  CONSTRAINT `notes_ifbk_2` FOREIGN KEY (`Notes`) REFERENCES `files` (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,1,'2025-01-01',NULL),(2,1,'2025-01-01',NULL),(3,2,'2025-01-01',NULL),(4,2,'2025-01-01',NULL);
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
  PRIMARY KEY (`SemesterID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester`
--

LOCK TABLES `semester` WRITE;
/*!40000 ALTER TABLE `semester` DISABLE KEYS */;
INSERT INTO `semester` VALUES (1,'Fall 2024'),(2,'Spring 2024'),(3,'Summer 2024');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'MilesL35','VeryStrongPassword'),(2,'IsaiahH','VeryStrongPassword2'),(4,'Justus','VeryStrongPassword3');
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

-- Dump completed on 2025-04-03 15:24:37
