function calculate() {
    //XP Multiplier 
    var xp_multiplier = document.getElementById("xp-multiplier").value;
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
    var min_messages_needed_to_send = (xp_needed / max_xp_gain_per_message);
    var avg_messages_needed_to_send = (xp_needed / ((min_xp_gain_per_message + max_xp_gain_per_message) / 2));
    var max_messages_needed_to_send = (xp_needed / min_xp_gain_per_message);
    var avg_messages_time = avg_messages_needed_to_send / 60 < 1 ? Math.floor(avg_messages_needed_to_send) + " minutes" :Math.round(avg_messages_needed_to_send/60) + " hours";
    var min_messages_time = min_messages_needed_to_send / 60 < 1 ? Math.floor(min_messages_needed_to_send) + " minutes" :Math.round(min_messages_needed_to_send/60) + " hours";
    var max_messages_time = max_messages_needed_to_send / 60 < 1 ? Math.floor(max_messages_needed_to_send) + " minutes" :Math.round(max_messages_needed_to_send/60) + " hours";

    //Display information to user
    document.getElementById("result-average").innerHTML = Math.ceil(avg_messages_needed_to_send);
    document.getElementById("result-xp-needed").innerHTML = xp_needed;
    document.getElementById("result-minimum-messages-requirement").innerHTML = Math.ceil(min_messages_needed_to_send);
    document.getElementById("result-maximum-messages-requirement").innerHTML = Math.ceil(max_messages_needed_to_send);
    document.getElementById("avg_message_time").innerHTML = avg_messages_time;
    document.getElementById("min_message_time").innerHTML = min_messages_time;
    document.getElementById("max_message_time").innerHTML = max_messages_time;
}
