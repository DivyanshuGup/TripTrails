<?php
/**
 * TripTrails – Newsletter Subscription Handler
 * Handles newsletter email signups
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

$email = htmlspecialchars(strip_tags(trim($_POST['email'] ?? '')));

if (empty($email)) {
    echo json_encode(['status' => 'error', 'message' => 'Email address is required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Please enter a valid email address.']);
    exit;
}

// ── SAVE TO DATABASE (optional) ──
// Uncomment and configure if using MySQL
/*
$host   = 'localhost';
$dbname = 'triptrails_db';
$user   = 'root';
$pass   = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Check if already subscribed
    $check = $pdo->prepare("SELECT id FROM subscribers WHERE email = ?");
    $check->execute([$email]);
    if ($check->fetch()) {
        echo json_encode(['status' => 'info', 'message' => 'You are already subscribed!']);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO subscribers (email, subscribed_at) VALUES (?, NOW())");
    $stmt->execute([$email]);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
    exit;
}
*/

// Send confirmation email
$to      = $email;
$subject = "Welcome to TripTrails Newsletter! ✈";
$body    = "Hi there!\n\nThank you for subscribing to TripTrails newsletter.\nYou'll be the first to know about exclusive deals, new destinations, and travel inspiration.\n\nHappy Travels!\nTeam TripTrails\nhello@triptrails.com";
$headers = "From: newsletter@triptrails.com\r\n";

mail($to, $subject, $body, $headers);

echo json_encode(['status' => 'success', 'message' => 'Successfully subscribed! Welcome to TripTrails community 🎉']);
?>
