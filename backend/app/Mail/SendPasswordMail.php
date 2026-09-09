<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $password;
    public $type;

    public function __construct($password, $type = 'Signup')
    {
        $this->password = $password;
        $this->type = $type;
    }

    public function build()
    {
        $subject = $this->type === 'Signup' 
            ? 'Your BIIT Internship System Login Password' 
            : 'Your New BIIT Internship System Password';

        return $this->subject($subject)
                    ->html("<h3>BIIT Career Services</h3>
                           <p>Your 8-digit auto-generated password is: <strong>{$this->password}</strong></p>
                           <p>Please use this password to log in to your account.</p>");
    }
}