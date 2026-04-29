<?php
/**
 * TripTrails – Contact Form Handler
 * Handles contact form submissions and sends email notifications
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

// Sanitize input data
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

$fname       = sanitize($_POST['fname'] ?? '');
$lname       = sanitize($_POST['lname'] ?? '');
$email       = sanitize($_POST['email'] ?? '');
$destination = sanitize($_POST['destination'] ?? '');
$budget      = sanitize($_POST['budget'] ?? '');
$message     = sanitize($_POST['message'] ?? '');

// Basic validation
if (empty($fname) || empty($email) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Please enter a valid email address.']);
    exit;
}

// ── EMAIL CONFIGURATION ──
$to      = 'hello@triptrails.com'; // Change to your email
$subject = "New Trip Inquiry – TripTrails";

$body = "
New trip inquiry received from TripTrails website.

Name        : {$fname} {$lname}
Email       : {$email}
Destination : {$destination}
Budget      : {$budget}
Message     : {$message}

Sent at     : " . date('Y-m-d H:i:s') . "
";

$headers  = "From: noreply@triptrails.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

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

    $stmt = $pdo->prepare("
        INSERT INTO inquiries (fname, lname, email, destination, budget, message, created_at)
        VALUES (?, ?, ?, ?, ?, ?, NOW())
    ");
    $stmt->execute([$fname, $lname, $email, $destination, $budget, $message]);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
    exit;
}
*/

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Your message has been sent! We will contact you within 24 hours.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Sorry, something went wrong. Please try again.']);
}
?>
