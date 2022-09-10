
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `courses` (`id`, `course_name`, `course_desc`) VALUES
(1, 'Html', 'HTML Course'),
(2, 'Java', 'Java Course');


CREATE TABLE `course_topics` (
  `id` int(11) NOT NULL,
  `course_id` int(11) DEFAULT NULL,
  `topic_name` varchar(100) NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `course_topics` (`id`, `course_id`, `topic_name`, `description`) VALUES
(1, 1, 'Varibales', '$i=1;\r\n$i is the varible and for varible you can use $'),
(2, 1, 'Array in php', '$array = [\"Green\", \"Yellow\", \"blue\"];\r\n'),
(5, 2, 'A Simple HTML Document', 'Print html');


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `users` (`id`, `user_name`, `email`, `password`) VALUES
(1, 'User', 'user123@gmail.com', 'User123456789@');


ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `course_topics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id` (`course_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `course_topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `course_topics`
  ADD CONSTRAINT `course_topics_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

