

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `bookmarkings` (
  `id` int(11) NOT NULL,
  `website_link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `bookmarkings` (`id`, `website_link`) VALUES
(1, 'https://www.facebook.com/'),
(2, 'https://www.google.com/'),
(3, 'https://www.linkedin.com/'),
(4, 'https://github.com/'),
(5, 'https://www.athabascau.ca/');


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `users` (`id`, `name`, `email_id`, `password`) VALUES
(1, 'pial', 'user@gmail.com', 'hossainpial123@'),
(2, '', '', ''),
(3, '', '', ''),
(4, '', '', ''),
(5, '', '', ''),


ALTER TABLE `bookmarkings`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bookmarkings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

