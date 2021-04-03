function save_user(){
    var user_name = document.getElementById('name').value;
    var user_email = document.getElementById('email').value;
    var user_message = document.getElementById('message').value;

    var uid = firebase.database().ref().child('users').push().key;
    
    var data = {
     user_id: uid,
     user_name: user_name,
     user_email: user_email,
     user_message: user_message
    }
    
    var updates = {};
    updates['/users/' + uid] = data;
    firebase.database().ref().update(updates);
    
    alert('Thank you! Your message has been sent successfully!');
    reload_page();
   }

