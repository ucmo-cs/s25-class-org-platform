CREATE DATABASE  IF NOT EXISTS `seniorproject` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `seniorproject`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: seniorproject
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
  `ClassID` int NOT NULL,
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
  PRIMARY KEY (`ClassID`),
  KEY `SemesterID` (`SemesterID`),
  KEY `MeetingTimesID` (`MeetingTimesID`),
  KEY `OfficeHoursID` (`OfficeHoursID`),
  KEY `class_ibfk_3` (`UserID`),
  CONSTRAINT `class_ibfk_1` FOREIGN KEY (`SemesterID`) REFERENCES `semester` (`SemesterID`),
  CONSTRAINT `class_ibfk_2` FOREIGN KEY (`MeetingTimesID`) REFERENCES `meetingtimes` (`MeetingTimesID`),
  CONSTRAINT `class_ibfk_3` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  CONSTRAINT `class_ibfk_4` FOREIGN KEY (`OfficeHoursID`) REFERENCES `meetingtimes` (`MeetingTimesID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `EventID` int NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Start` datetime DEFAULT NULL,
  `End` datetime DEFAULT NULL,
  `ClassID` int DEFAULT NULL,
  `UserID` int NOT NULL,
  PRIMARY KEY (`EventID`),
  KEY `ClassID` (`ClassID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`ClassID`) REFERENCES `class` (`ClassID`),
  CONSTRAINT `event_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meetingtimes`
--

DROP TABLE IF EXISTS `meetingtimes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meetingtimes` (
  `MeetingTimesID` int NOT NULL,
  `MondayStart` datetime DEFAULT NULL,
  `MondayEnd` datetime DEFAULT NULL,
  `TuesdayStart` datetime DEFAULT NULL,
  `TuesdayEnd` datetime DEFAULT NULL,
  `WednesdayStart` datetime DEFAULT NULL,
  `WednesdayEnd` datetime DEFAULT NULL,
  `ThursdayStart` datetime DEFAULT NULL,
  `ThursdayEnd` datetime DEFAULT NULL,
  `FridayStart` datetime DEFAULT NULL,
  `FridayEnd` datetime DEFAULT NULL,
  `SatrudayStart` datetime DEFAULT NULL,
  `SaturdayEnd` datetime DEFAULT NULL,
  `SundayStart` datetime DEFAULT NULL,
  `SundayEnd` datetime DEFAULT NULL,
  PRIMARY KEY (`MeetingTimesID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetingtimes`
--

LOCK TABLES `meetingtimes` WRITE;
/*!40000 ALTER TABLE `meetingtimes` DISABLE KEYS */;
/*!40000 ALTER TABLE `meetingtimes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `NotesID` int NOT NULL,
  `ClassID` int NOT NULL,
  `Date` date DEFAULT NULL,
  `Notes` binary(64) DEFAULT NULL,
  PRIMARY KEY (`NotesID`),
  KEY `ClassID` (`ClassID`),
  CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`ClassID`) REFERENCES `class` (`ClassID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semester`
--

DROP TABLE IF EXISTS `semester`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semester` (
  `SemesterID` int NOT NULL,
  `SemesterName` varchar(30) NOT NULL,
  PRIMARY KEY (`SemesterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester`
--

LOCK TABLES `semester` WRITE;
/*!40000 ALTER TABLE `semester` DISABLE KEYS */;
/*!40000 ALTER TABLE `semester` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserID` int NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `PasswordHash` binary(64) NOT NULL,
  `usercol` varchar(45) NOT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserName` (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
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

-- Dump completed on 2025-03-19 13:01:13
