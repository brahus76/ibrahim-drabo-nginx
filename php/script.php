<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = strip_tags(trim($_POST['prenom']));
    $nom = strip_tags(trim($_POST['nom']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST['message']));

    // Validation simple
    if (empty($prenom) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.php?status=empty");
        exit;
    }

    $to = "ton-email@domaine.com"; // Mets ton vrai email ici
    $subject = "Contact Portfolio: $prenom $nom";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=utf-8";
    
    $body = "Nom: $nom\nPrenom: $prenom\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: index.php?status=success");
    } else {
        header("Location: index.php?status=error");
    }
}
?>