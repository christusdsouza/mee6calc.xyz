function calculate() {
    //XP Multiplier 
    var xp_multiplier = document.getElementById("xp_multiplier").value;
    //Constants
    var min_xp_gain_per_message = 15 * xp_multiplier;
    var max_xp_gain_per_message = 25 * xp_multiplier;

    //Input from user
    var desired_level = document.getElementById("desired-level").value;
    var current_xp = document.getElementById("current-xp").value;

    //Magical math functions
    var xp_to_desired_level = 5 / 6 * desired_level * (2 * desired_level * desired_level + 27 * desired_level + 91);
    var xp_needed = xp_to_desired_level - current_xp;

    //Minimum, average, and maximum messages needed to send in order to reach specified level
    var min_messages_needed_to_send = Math.ceil(xp_needed / max_xp_gain_per_message);
    var avg_messages_needed_to_send = Math.ceil(xp_needed / ((min_xp_gain_per_message + max_xp_gain_per_message) / 2));
    var max_messages_needed_to_send = Math.ceil(xp_needed / min_xp_gain_per_message);
    var avg_messages_hour = Math.round(avg_messages_needed_to_send/60);
    var min_messages_hour = Math.round(min_messages_needed_to_send/60);
    var max_messages_hour = Math.round(max_messages_needed_to_send/60);

    //Display information to user
    document.getElementById("result-average").innerHTML = avg_messages_needed_to_send;
    document.getElementById("result-xp-needed").innerHTML = xp_needed;
    document.getElementById("result-minimum-messages-requirement").innerHTML = min_messages_needed_to_send;
    document.getElementById("result-maximum-messages-requirement").innerHTML = max_messages_needed_to_send;
    document.getElementById("avg_message_hours").innerHTML = avg_messages_hour;
    document.getElementById("min_message_hours").innerHTML = min_messages_hour;
    document.getElementById("max_message_hours").innerHTML = max_messages_hour;
}
