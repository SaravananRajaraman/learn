<?php 
        // create curl resource 
        $ch = curl_init(); 

        // set url         
$data= array("secret" =>"secret","response"=>$_POST['response']);
        curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
        //return the transfer as a string 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

        // $output contains the output string 
        // $output = curl_exec($ch); 
        $output = curl_exec($ch);
        if($output === false){
            echo curl_error($ch);
        }else{
          echo $output;
        }
        
        // close curl resource to free up system resources 
        curl_close($ch);      
?>