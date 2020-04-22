if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // some code..
} else {
    // some code
}
$(document).ready(function() {
    $.ajax({
        url: "https://private-1b251d-cardhover.apiary-mock.com/profilemima",
        success: function(data) {
            $.each(data, function(key, initialData) {
                $('.profile-name').text(initialData.name);
                $('.profile-post').text(initialData.job);
                console.log(initialData);
                $.each(initialData.skillset, function(key, value) {
                    var profileGroup = '<div class="profile-group">' +
                        '<span class="profile-value">' + value.exp + '</span>' +
                        '<span class="profile-param">' + value.skill + '</span>' +
                        '</div>';
                    $('.profile-stats').append(profileGroup);
                });
            });
        }
    });
})